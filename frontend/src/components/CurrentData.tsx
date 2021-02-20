import React from "react";
import { unixToDate } from "../utils/format";
import styles from "../styles/CurrentData.module.css";

export default function CurrentData({ forecast, cityInfo }: any) {
	return (
		<section className={styles.dataContainer}>
			<section className={styles.mainContent}>
				<h3>{forecast.current.temp} °K</h3>
				<h3>
					{cityInfo[0].long_name}, {cityInfo[2].short_name}
				</h3>
			</section>

			<section className={styles.additionalContent}>
				<section className={styles.dataList}>
					<ul>
						<li>Precipitation</li>
						<li>Humidity</li>
						<li>Wind</li>
					</ul>
					<ul className={styles.values}>
						<li>{forecast.daily[0].pop}%</li>
						<li>{forecast.current.humidity}%</li>
						<li>{parseFloat(forecast.current.wind_speed).toFixed(1)}m/s</li>
					</ul>
				</section>

				<section className={styles.dataList}>
					<ul>
						<li>Feels like</li>
						<li>Sunrise</li>
						<li>Sunset</li>
					</ul>
					<ul className={styles.values}>
						<li>{forecast.current.feels_like} °K</li>
						<li>{unixToDate(forecast.current.sunrise, forecast.timezone)}</li>
						<li>{unixToDate(forecast.current.sunset, forecast.timezone)}</li>
					</ul>
				</section>
			</section>
		</section>
	);
}
