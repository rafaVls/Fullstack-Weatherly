import React, { useState, useEffect } from "react";

export default function App() {
	interface Coordinates {
		latitude: number | null;
		longitude: number | null;
	}

	interface Forecast {
		timezone: string | null;
		timezone_offset: number | null;
		current: object | null;
		hourly: object[] | null;
		daily: object[] | null;
	}

	interface CityInfo {
		long_name: string | null;
		short_name: string | null;
	}

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

	return (
		<section>
			<h3>Your weather here</h3>
		</section>
	);
}
