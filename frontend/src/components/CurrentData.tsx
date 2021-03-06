import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItems from "./ForecastItems";

import { getTodayString } from "../utils/date";
import { getStateShort, getDayIcon } from "../utils/helperMethods";

import styles from "../styles/CurrentData.module.css";

export default function CurrentData() {
	const { forecast, cityInfo } = useContext(GlobalContext);
	const currentWeather = forecast.current.weather[0];
	const todaysTemperature = forecast.daily[0].temp;

	return (
		<section className={styles.dataContainer}>
			<section className={styles.mainContent}>
				<img
					src={getDayIcon(currentWeather.icon)}
					title={currentWeather.main}
					alt={currentWeather.description}
				/>
				<section className={styles.temperatures}>
					<h3>{forecast.current.temp} °K</h3>
					<h4 title="Min temperature">{todaysTemperature.min} °K</h4>
					<h4 title="Max temperature">{todaysTemperature.max} °K</h4>
				</section>
				<h3>
					{getTodayString()} <br />
					{cityInfo[0].long_name}, {getStateShort(cityInfo)}
				</h3>
			</section>

			<ForecastItems />
		</section>
	);
}
