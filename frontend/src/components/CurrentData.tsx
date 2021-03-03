import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItems from "./ForecastItems";

import styles from "../styles/CurrentData.module.css";

function useStateContext() {
	const { setCoordinates, getForecast } = useContext(GlobalContext);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			pos => {
				const coordinates = pos.coords;
				const { latitude, longitude } = coordinates;
				setCoordinates(latitude, longitude);
				getForecast(pos.coords);
			},
			err => {
				console.warn(`Error(${err.code}): ${err.message}`);
			},
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			}
		);
	}, []);
}

export default function CurrentData() {
	const { forecast } = useContext(GlobalContext);
	useStateContext();

	return (
		<section className={styles.dataContainer}>
			{forecast && (
				<section className={styles.mainContent}>
					<h3>{forecast.timezone} °K</h3>
					{/* <h3>
					{cityInfo[0].long_name}, {cityInfo[2].short_name}
				</h3> */}
				</section>
			)}

			{/* <ForecastItems forecast={forecast} /> */}
		</section>
	);
}
