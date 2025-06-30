import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { menuItem } from "./Menuitem";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
  children?: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={styles.containerMainLayout}>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[location.pathname]}
        mode="inline"
        onSelect={(e) => {
          navigate(e.key);
        }}
        items={menuItem}
      />
      <div className={styles.containerOutlet}>{children ?? <Outlet />}</div>
    </div>
  );
}
