import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WeatherIcon from "./WeatherIcon";
import Temperatures from "./Temperatures";

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

			<form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<label htmlFor="citySelector">Search by city: </label>
				<section className={styles.searchBar}>
					<input type="search" name="citySelector" placeholder="City name" />
					<img
						src="https://www.flaticon.com/svg/vstatic/svg/751/751463.svg?token=exp=1615415272~hmac=45e52b37a69adc42b18414867920397f"
						alt="A magnifying glass"
					/>
				</section>
			</form>
		</section>
	);
}
