import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItem from "./ForecastItem";
import styles from "../styles/ForecastItems.module.css";

import { unixToDate } from "../utils/format";

export default function ForecastItems() {
	const { forecast } = useContext(GlobalContext);
	const currentForecast = forecast.current;
	const timezone = forecast.timezone;

	return (
		<ul className={styles.itemsContainer}>
			<ForecastItem data={`${forecast.daily[0].pop}%`}>
				Precipitation
			</ForecastItem>

			<ForecastItem data={`${currentForecast.humidity}%`}>
				Humidity
			</ForecastItem>

			<ForecastItem data={`${currentForecast.wind_speed.toFixed(2)}m/s`}>
				Wind
			</ForecastItem>

			<ForecastItem data={`${currentForecast.feels_like} °K`}>
				Feels like
			</ForecastItem>

			<ForecastItem data={`${unixToDate(currentForecast.sunrise, timezone)}`}>
				Sunrise
			</ForecastItem>

			<ForecastItem data={`${unixToDate(currentForecast.sunset, timezone)}`}>
				Sunset
			</ForecastItem>
		</ul>
	);
}
