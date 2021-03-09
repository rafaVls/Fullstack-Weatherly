import React from "react";
import { getDayIcon } from "../utils/helperMethods";
import { Weather } from "../common/types";

export default function WeatherIcon(weather: Weather) {
	return (
		<img
			src={getDayIcon(weather.icon)}
			title={weather.main}
			alt={`Current weather condition: ${weather.description}`}
		/>
	);
}
