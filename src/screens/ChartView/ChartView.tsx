import styles from "./ChartView.module.scss";

export const ChartView = () => {
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
