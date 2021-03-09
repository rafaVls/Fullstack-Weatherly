import React from "react";
import { getDayIcon } from "../utils/helperMethods";
import { Weather } from "../common/types";

interface Props {
	weather: Weather;
}

export default function WeatherIcon({ weather }: Props) {
	return (
		<img
			src={getDayIcon(weather.icon)}
			title={weather.main}
			alt={`Current weather condition: ${weather.description}`}
		/>
	);
}
