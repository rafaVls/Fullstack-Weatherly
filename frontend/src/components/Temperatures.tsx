import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import styles from "../styles/Temperatures.module.css";

type Props = {
	typeOfTemps: "current" | "forecast";
	// day represents the number of the daily card.
	// I.e. 1 - 5
	day?: number;
};

export default function Temperatures({ typeOfTemps, day }: Props) {
	const { forecast } = useContext(GlobalContext);

	if (typeOfTemps === "current") {
		const todaysTemperature = forecast.daily[0].temp;

		return (
			<hgroup className={styles.temperatures}>
				<h1>{forecast.current.temp} °K</h1>
				<h2 title="Min temperature">Min: {todaysTemperature.min} °K</h2>
				<h2 title="Max temperature">Max: {todaysTemperature.max} °K</h2>
			</hgroup>
		);
	} else {
		return <h1>{forecast.daily[day].temp.day} °K</h1>;
	}
}
