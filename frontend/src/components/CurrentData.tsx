import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItems from "./ForecastItems";

import { getTodayString } from "../utils/date";
import styles from "../styles/CurrentData.module.css";

export default function CurrentData() {
	const { forecast, cityInfo } = useContext(GlobalContext);

	return (
		<section className={styles.dataContainer}>
			<section className={styles.mainContent}>
				<img
					src={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
					alt=""
				/>
				<h3>{forecast.current.temp} °K</h3>
				<h3>
					{getTodayString()} <br />
					{cityInfo[0].long_name}, {cityInfo[2].short_name}
				</h3>
			</section>

			<ForecastItems />
		</section>
	);
}
