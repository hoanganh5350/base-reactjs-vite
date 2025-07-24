import { AgGridDemo, ChartView, DefaultPanel, PieChart } from "../../screens";

export enum EScrensView {
  DEFAULT_PANEL = "defaultPanel",
  CHART_VIEW = "chartView",
  PIE_CHART = "pieChart",
  AG_GRID = "agGrid",
}

export const objConfligComponents = {
  [EScrensView.DEFAULT_PANEL]: DefaultPanel,
  [EScrensView.CHART_VIEW]: ChartView,
  [EScrensView.PIE_CHART]: PieChart,
  [EScrensView.AG_GRID]: AgGridDemo,
};

export const confligComponentsPanel = {
  [EScrensView.DEFAULT_PANEL]: {
    title: "Add More Screens",
    conponent: DefaultPanel,
  },
  [EScrensView.CHART_VIEW]: {
    title: "Chart View Trading",
    conponent: ChartView,
  },
  [EScrensView.PIE_CHART]: {
    title: "Pie Chart",
    conponent: PieChart,
  },
  [EScrensView.AG_GRID]: {
    title: "AgGrid",
    conponent: AgGridDemo,
  },
};
