import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WeatherIcon from "./WeatherIcon";
import Temperatures from "./Temperatures";
import SearchBar from "./SearchBar";

import { getTodayString } from "../utils/date";
import { getStateShort } from "../utils/helperMethods";
import styles from "../styles/MainContent.module.css";

export default function MainContent() {
	const { forecast, cityInfo } = useContext(GlobalContext);
	const currentWeather = forecast.current.weather[0];

	return (
		<section className={styles.mainContent}>
			<WeatherIcon weather={currentWeather} />
			<Temperatures typeOfTemps="current" />
			<h3>
				{getTodayString()} <br />
				{cityInfo[0].long_name}, {getStateShort(cityInfo)}
			</h3>
			<SearchBar />
		</section>
	);
}
