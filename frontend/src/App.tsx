import React, { useState, useEffect } from "react";
import { Coordinates, Forecast, CityInfo } from "./common/types";
import CurrentData from "./components/CurrentData";

import styles from "./styles/App.module.css";

function useLocationAndForecast() {
	const [location, setLocation] = useState<Coordinates>({
		latitude: null,
		longitude: null
	});
	const [forecast, setForecast] = useState<Forecast>({
		timezone: null,
		timezone_offset: null,
		current: null,
		hourly: null,
		daily: null
	});
	const [cityInfo, setCityInfo] = useState<CityInfo[]>([
		{
			long_name: null,
			short_name: null
		}
	]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			pos => {
				let coordinates = pos.coords;
				const { latitude, longitude } = coordinates;
				setLocation({ latitude, longitude });
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

	useEffect(() => {
		async function fetchData(
			APIName: string,
			position: Coordinates,
			stateFunction: Function
		) {
			const lat = position.latitude;
			const lon = position.longitude;
			let APICall: string;

			switch (APIName) {
				case "oneCall":
					APICall = `/onecall/${lat}&${lon}`;
					break;

				case "reverseGeocoding":
					APICall = `/reverse/${lat}&${lon}`;
					break;

				default:
					APICall = "";
					break;
			}
			const res = await fetch(APICall);
			const { data } = await res.json();
			stateFunction(data);
		}

		if (location.latitude) {
			fetchData("oneCall", location, setForecast);
			fetchData("reverseGeocoding", location, setCityInfo);
		}
	}, [location]);

	return {
		location,
		forecast,
		cityInfo
	};
}

export default function App() {
	const { location, forecast, cityInfo } = useLocationAndForecast();

	return (
		<>
			{forecast.current && cityInfo[0] ? (
				<section className={styles.App}>
					<CurrentData forecast={forecast} cityInfo={cityInfo} />
				</section>
			) : (
				<section className={styles.loader_container}>
					<div className={styles.loader}></div>
				</section>
			)}
		</>
	);
}
