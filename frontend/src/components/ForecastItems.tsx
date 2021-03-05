import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styles from "../styles/ForecastItems.module.css";

import { unixToDate } from "../utils/format";

export default function ForecastItems() {
	const { forecast } = useContext(GlobalContext);

	return (
		<ul>
			<li className={`${styles.firstRow} ${styles.left}`}>
				<p>Precipitation</p>
				<p>{forecast.daily[0].pop}%</p>
			</li>

			<li className={`${styles.secondRow} ${styles.left}`}>
				<p>Humidity</p>
				<p>{forecast.current.humidity}%</p>
			</li>

			<li className={`${styles.thirdRow} ${styles.left}`}>
				<p>Wind</p>
				<p>{forecast.current.wind_speed.toFixed(2)}m/s</p>
			</li>

			<li className={` ${styles.firstRow} ${styles.right}`}>
				<p>Feels like</p>
				<p>{forecast.current.feels_like} °K</p>
			</li>

			<li className={` ${styles.secondRow} ${styles.right}`}>
				<p>Sunrise</p>
				<p>{unixToDate(forecast.current.sunrise, forecast.timezone)}</p>
			</li>

			<li className={` ${styles.thirdRow} ${styles.right}`}>
				<p>Sunset</p>
				<p>{unixToDate(forecast.current.sunset, forecast.timezone)}</p>
			</li>
		</ul>
	);
}
