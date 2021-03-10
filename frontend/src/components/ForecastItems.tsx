import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItem from "./ForecastItem";

import { unixToDate } from "../utils/format";
import styles from "../styles/ForecastItems.module.css";

export default function ForecastItems() {
	const { forecast, units } = useContext(GlobalContext);
	const currentForecast = forecast.current;
	const timezone = forecast.timezone;

	const forecastItems = [
		{
			id: 1,
			data: `${forecast.hourly[0].pop * 100}%`,
			children: "Precipitation"
		},
		{
			id: 2,
			data: `${currentForecast.humidity}%`,
			children: "Humidity"
		},
		{
			id: 3,
			data: `${currentForecast.wind_speed.toFixed(2)} mph`,
			children: "Wind"
		},
		{
			id: 4,
			data: `${currentForecast.feels_like} ${units}`,
			children: "Feels like"
		},
		{
			id: 5,
			data: `${unixToDate(currentForecast.sunrise, timezone)}`,
			children: "Sunrise"
		},
		{
			id: 6,
			data: `${unixToDate(currentForecast.sunset, timezone)}`,
			children: "Sunset"
		}
	];

	const forecastComponents = forecastItems.map(item => (
		<ForecastItem key={item.id} data={item.data}>
			{item.children}
		</ForecastItem>
	));

	return <ul className={styles.itemsContainer}>{forecastComponents}</ul>;
}
