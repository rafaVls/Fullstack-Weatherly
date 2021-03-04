import React, { useContext, useEffect } from "react";
import CurrentData from "./components/CurrentData";
import { GlobalContext } from "./context/GlobalState";

import styles from "./styles/App.module.css";

function useLocationAndForecast() {
	const {
		latitude,
		longitude,
		forecast,
		cityInfo,
		getForecast,
		getCityInfo,
		setCoordinates
	} = useContext(GlobalContext);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			pos => {
				const coordinates = pos.coords;
				const { latitude, longitude } = coordinates;
				setCoordinates(latitude, longitude);
			},
			err => {
				console.warn(`Error(${err.code}): ${err.message}`);
			},
			{
				enableHighAccuracy: true,
				timeout: 10000,
				maximumAge: 0
			}
		);

		if (latitude && longitude) {
			const coordinates = { latitude, longitude };

			getForecast(coordinates);
			getCityInfo(coordinates);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [latitude, longitude]);

	return { forecast, cityInfo };
}

export default function App() {
	const { forecast, cityInfo } = useLocationAndForecast();

	return (
		<>
			{forecast && cityInfo ? (
				<section className={styles.App}>
					<CurrentData />
				</section>
			) : (
				<section className={styles.loader_container}>
					<div className={styles.loader}></div>
				</section>
			)}
		</>
	);
}
