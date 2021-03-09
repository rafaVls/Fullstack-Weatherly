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
		<section className={styles.container}>
			<WeatherIcon weather={forecast.daily[day].weather[0]} />
			<h1>{getDailyInitials(day)}</h1>
			<Temperatures typeOfTemps="forecast" day={day} />
		</section>
	);
}
