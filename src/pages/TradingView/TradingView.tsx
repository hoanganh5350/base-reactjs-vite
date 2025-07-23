import styles from "./TradingView.module.scss";
import {
  DockviewReact,
  DockviewReadyEvent,
  IDockviewHeaderActionsProps,
} from "dockview";
import "dockview/dist/styles/dockview.css";
import { useEffect, useState } from "react";
import { EScrensView, objConfligComponents } from "./confligView";

let panelCount = 0;

const LeftComponent = (props: IDockviewHeaderActionsProps) => {
  const onClick = () => {
    props.containerApi.addPanel({
      id: (++panelCount).toString(),
      title: `Tab ${panelCount}`,
      component: EScrensView.DEFAULT_PANEL,
      position: { referenceGroup: props.group },
    });
  };
  return (
    <div
      style={{ height: "100%", color: "white", padding: "0px 4px" }}
      onClick={onClick}
    >
      +
    </div>
  );
};

const RightComponent = (props: IDockviewHeaderActionsProps) => {
  const [maximized, setMaximized] = useState<boolean>(props.api.isMaximized());
  const isFloating = props.group.api.location.type === "floating";
  useEffect(() => {
    const disposable = props.containerApi.onDidMaximizedGroupChange(() => {
      setMaximized(props.api.isMaximized());
    });

    return () => {
      disposable.dispose();
    };
  }, [props.api, props.containerApi]);

  const onClick = () => {
    if (maximized) {
      props.api.exitMaximized();
    } else {
      props.api.maximize();
    }
  };

  const onRemoveGroup = () => {
    const groupRemove = props.containerApi.getGroup(props.group.id);
    if (groupRemove) props.containerApi.removeGroup(groupRemove);
  };

  if (isFloating) return <div onClick={onRemoveGroup}>X</div>;

  return (
    <div
      style={{
        height: "100%",
        color: "white",
        padding: "0px 4px",
        display: "flex",
      }}
    >
      <div onClick={onClick}>Zoomm</div>
      <div
        onClick={() => {
          const panel = props.containerApi?.activePanel;
          if (!panel) return;
          props.containerApi.addFloatingGroup(panel, {
            x: 100,
            y: 100,
            height: 300,
            width: 300,
          });
        }}
      >
        export window
      </div>

      <div onClick={onRemoveGroup}>X</div>
    </div>
  );
};

export const TradingView = () => {
  const onReady = (event: DockviewReadyEvent) => {
    event.api.addPanel({
      id: "panel-1",
      component: EScrensView.CHART_VIEW,
      title: "Tab A",
    });

    event.api.addPanel({
      id: "panel-2",
      component: EScrensView.DEFAULT_PANEL,
      title: "Tab B",
    });

    event.api.addPanel({
      id: "panel-3",
      component: EScrensView.DEFAULT_PANEL,
      title: "Tab C (Split)",
      position: {
        referencePanel: "panel-1",
        direction: "right", // chia bên phải
      },
    });
  };
  return (
    <div className={styles.containerTradingView}>
      <DockviewReact
        components={objConfligComponents}
        onReady={onReady}
        leftHeaderActionsComponent={LeftComponent}
        rightHeaderActionsComponent={RightComponent}
      />
    </div>
  );
};
