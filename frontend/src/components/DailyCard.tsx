import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WeatherIcon from "./WeatherIcon";
import Temperatures from "./Temperatures";

import { getDailyInitials } from "../utils/date";
import styles from "../styles/DailyCard.module.css";

interface Props {
	day: number;
}

export default function DailyCard({ day }: Props) {
	const { forecast } = useContext(GlobalContext);

	return (
		<li className={styles.card}>
			<WeatherIcon weather={forecast.daily[day].weather[0]} />
			<p>{getDailyInitials(day)}</p>
			<Temperatures typeOfTemps="forecast" day={day} />
		</li>
	);
}
