import { IDockviewHeaderActionsProps } from "dockview";
import styles from "./TradingView.module.scss";
import { v4 as uuidv4 } from "uuid";
import { confligComponentsPanel, EScrensView } from "./confligView";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const AddPanel = (props: IDockviewHeaderActionsProps) => {
  const defaultPanel = confligComponentsPanel[EScrensView.DEFAULT_PANEL];
  const onClick = () => {
    props.containerApi.addPanel({
      id: uuidv4(),
      title: defaultPanel.title,
      component: EScrensView.DEFAULT_PANEL,
      position: { referenceGroup: props.group },
    });
  };
  return (
    <div className={styles.outLineAddMorePanel}>
      <Button
        className={styles.addMorePanel}
        color="default"
        variant="filled"
        onClick={onClick}
      >
        <PlusOutlined />
      </Button>
    </div>
  );
};
