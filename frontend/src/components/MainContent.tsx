import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WeatherIcon from "./WeatherIcon";

import { getTodayString } from "../utils/date";
import { getStateShort } from "../utils/helperMethods";

import styles from "../styles/MainContent.module.css";

export default function MainContent() {
	const { forecast, cityInfo } = useContext(GlobalContext);

	const currentWeather = forecast.current.weather[0];
	const todaysTemperature = forecast.daily[0].temp;

	return (
		<section className={styles.mainContent}>
			<WeatherIcon weather={currentWeather} />
			<hgroup className={styles.temperatures}>
				<h1>{forecast.current.temp} °K</h1>
				<h2 title="Min temperature">Min: {todaysTemperature.min} °K</h2>
				<h2 title="Max temperature">Max: {todaysTemperature.max} °K</h2>
			</hgroup>
			<h3>
				{getTodayString()} <br />
				{cityInfo[0].long_name}, {getStateShort(cityInfo)}
			</h3>
		</section>
	);
}
