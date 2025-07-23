// import { v4 as uuidv4 } from "uuid";
import { ChartView, DefaultPanel } from "../../screens";

export enum EScrensView {
  DEFAULT_PANEL = "defaultPanel",
  CHART_VIEW = "chartView",
}

export const objConfligComponents = {
  [EScrensView.DEFAULT_PANEL]: DefaultPanel,
  [EScrensView.CHART_VIEW]: ChartView,
};