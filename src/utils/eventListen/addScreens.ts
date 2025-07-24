import { EScrensView } from "../../pages/TradingView/confligView";

export const triggerAddScreens = (screenName: EScrensView) => {
  const event = new CustomEvent("addScreen", {
    detail: { screenName },
  });

  window.dispatchEvent(event);
};
