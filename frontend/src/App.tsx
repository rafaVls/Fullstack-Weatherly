import React, { useContext, useEffect } from "react";
import CurrentData from "./components/CurrentData";
import { GlobalContext } from "./context/GlobalState";

import styles from "./styles/App.module.css";

function useLocationAndForecast() {
	const {
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
				getForecast(coordinates);
				getCityInfo(coordinates);
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
	}, []);

	return { forecast, cityInfo };
}

// function useLocationAndForecast() {
// 	const [location, setLocation] = useState<Coordinates>({
// 		latitude: null,
// 		longitude: null
// 	});
// 	const [forecast, setForecast] = useState<Forecast>({
// 		timezone: null,
// 		timezone_offset: null,
// 		current: null,
// 		hourly: null,
// 		daily: null
// 	});
// 	const [cityInfo, setCityInfo] = useState<CityInfo[]>([
// 		{
// 			long_name: null,
// 			short_name: null
// 		}
// 	]);

// 	useEffect(() => {
// 		async function fetchData(
// 			APIName: string,
// 			position: Coordinates,
// 			stateFunction: Function
// 		) {
// 			const lat = position.latitude;
// 			const lon = position.longitude;
// 			let APICall: string;

// 			switch (APIName) {
// 				case "oneCall":
// 					APICall = `/onecall/${lat}&${lon}`;
// 					break;

// 				case "reverseGeocoding":
// 					APICall = `/reverse/${lat}&${lon}`;
// 					break;

// 				default:
// 					APICall = "";
// 					break;
// 			}
// 			const res = await fetch(APICall);
// 			const { data } = await res.json();
// 			stateFunction(data);
// 		}

// 		if (location.latitude) {
// 			fetchData("oneCall", location, setForecast);
// 			fetchData("reverseGeocoding", location, setCityInfo);
// 		}
// 	}, [location]);

// 	return {
// 		location,
// 		forecast,
// 		cityInfo
// 	};
// }

export default function App() {
	const { forecast, cityInfo } = useLocationAndForecast();

	return (
		<>
			{forecast != null && cityInfo != null ? (
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
