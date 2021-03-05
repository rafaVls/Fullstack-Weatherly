import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItems from "./ForecastItems";

import { getTodayString } from "../utils/date";
import { getStateShort } from "../utils/sorting";

import styles from "../styles/CurrentData.module.css";

export default function CurrentData() {
	const { forecast, cityInfo } = useContext(GlobalContext);
	const currentWeather = forecast.current.weather[0];

	return (
		<section className={styles.dataContainer}>
			<section className={styles.mainContent}>
				<img
					src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
					title={currentWeather.main}
					alt={currentWeather.description}
				/>
				<h3>{forecast.current.temp} °K</h3>
				<h3>
					{getTodayString()} <br />
					{cityInfo[0].long_name}, {getStateShort(cityInfo)}
				</h3>
			</section>

			<ForecastItems />
		</section>
	);
}
