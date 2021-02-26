import React from "react";
import styles from "../styles/ForecastItems.module.css";

import { unixToDate } from "../utils/format";

export default function ForecastItems({ forecast }: any) {
	return (
		<ul>
			<li>
				<p className={styles.forecastType}>Precipitation</p>
				<p className={styles.forecastType}>Humidity</p>
				<p className={styles.forecastType}>Sunrise</p>
				<p className={styles.forecastType}>Sunset</p>
				<p className={styles.forecastType}>Wind</p>
			</li>

			<li>
				<p className={styles.forecastValue}>{forecast.daily[0].pop}%</p>
				<p className={styles.forecastValue}>{forecast.current.humidity}%</p>
				<p className={styles.forecastValue}>
					{unixToDate(forecast.current.sunrise, forecast.timezone)}
				</p>
				<p className={styles.forecastValue}>
					{unixToDate(forecast.current.sunset, forecast.timezone)}
				</p>
				<p className={styles.forecastValue}>
					{parseFloat(forecast.current.wind_speed).toFixed(1)}m/s
				</p>
			</li>
		</ul>
	);
}
