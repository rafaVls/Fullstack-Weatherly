import React from "react";
import GlobalProvider from "./context/GlobalState";
import CurrentData from "./components/CurrentData";

import styles from "./styles/App.module.css";

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
	return (
		<GlobalProvider>
			<section className={styles.App}>
				<CurrentData />
			</section>
			{/* {forecast.current && cityInfo[0] ? (
				<section className={styles.App}>
					<CurrentData forecast={forecast} cityInfo={cityInfo} />
				</section>
			) : (
				<section className={styles.loader_container}>
					<div className={styles.loader}></div>
				</section>
			)} */}
		</GlobalProvider>
	);
}
