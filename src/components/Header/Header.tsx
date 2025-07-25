import styles from "./Header.module.scss";
import reactLogo from "./../../assets/react.svg";
import { Extend } from "./Extend";

export const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.header}>
        <a href="https://react.dev" className={styles.react} target="_blank">
          <img src={reactLogo} className={styles.logoReact} alt="React logo" />
          <div className={styles.textReact}>ReactJS Demo</div>
        </a>
        <Extend />
      </div>
    </div>
  );
};
