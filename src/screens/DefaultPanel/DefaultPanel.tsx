import styles from "./DefaultPanel.module.scss";

export const DefaultPanel = () => {
  return (
    <div className={styles.chartView}>
      <img
        role="presentation"
        loading="lazy"
        className={styles.imageChart}
        src="https://static.tradingview.com/static/bundles/advanced-chart-tablet.5609abc2debf5bc5dfa4.jpg"
      ></img>
    </div>
  );
};
