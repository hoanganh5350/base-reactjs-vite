import styles from "./TradingView.module.scss";
import { DockviewApi, DockviewReact, DockviewReadyEvent } from "dockview";
import "dockview/dist/styles/dockview.css";
import { useEffect, useRef } from "react";
import {
  confligComponentsPanel,
  EScrensView,
  objConfligComponents,
} from "./confligView";
import { AddPanel } from "./AddPanel";
import { ToolBarGroup } from "./ToolBarGroup";
import { v4 as uuidv4 } from "uuid";

export const TradingView = () => {
  const viewTradingRef = useRef<HTMLDivElement>(null);
  const dockviewApi = useRef<DockviewApi | null>(null);
  const onReady = (event: DockviewReadyEvent) => {
    const agGrid = confligComponentsPanel[EScrensView.AG_GRID];
    const chartView = confligComponentsPanel[EScrensView.CHART_VIEW];
    const pieChart = confligComponentsPanel[EScrensView.PIE_CHART];
    dockviewApi.current = event.api;
    event.api.addPanel({
      id: "panel-1",
      component: EScrensView.CHART_VIEW,
      title: chartView.title,
    });

    event.api.addPanel({
      id: "panel-2",
      component: EScrensView.AG_GRID,
      title: agGrid.title,
      position: {
        referencePanel: "panel-1",
        direction: "right",
      },
      initialWidth: viewTradingRef.current?.clientWidth
        ? viewTradingRef.current?.clientWidth * 0.3
        : 400,
    });

    event.api.addPanel({
      id: "panel-3",
      component: EScrensView.PIE_CHART,
      title: pieChart.title,
      position: {
        referencePanel: "panel-2",
        direction: "below",
      },
    });
  };

  useEffect(() => {
    return window.addEventListener("addScreen", (data: Event) => {
      const component = (
        data as unknown as { detail: { screenName: EScrensView } }
      )?.detail.screenName;
      if (dockviewApi.current) {
        console.log(dockviewApi.current.activePanel?.id);
        const confligCOmponent = confligComponentsPanel[component];
        // const groupActive = dockviewApi.current.activeGroup;
        // if (!groupActive) return;
        dockviewApi.current.addPanel({
          id: uuidv4(),
          title: confligCOmponent.title,
          component: component,
          // position: { referenceGroup: groupActive },
        });
      }
    });
  }, []);

  return (
    <div className={styles.containerTradingView} ref={viewTradingRef}>
      <DockviewReact
        components={objConfligComponents}
        onReady={onReady}
        leftHeaderActionsComponent={AddPanel}
        rightHeaderActionsComponent={ToolBarGroup}
      />
    </div>
  );
};
