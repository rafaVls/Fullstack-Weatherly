import React from "react";
import { getDayIcon } from "../utils/helperMethods";
import { Weather } from "../common/types";

import styles from "../styles/WeatherIcon.module.css";

interface Props {
	weather: Weather;
}

export default function WeatherIcon({ weather }: Props) {
	return (
		<img
			className={styles.icon}
			src={getDayIcon(weather.icon)}
			title={weather.main}
			alt={`Current weather condition: ${weather.description}`}
		/>
	);
}
