import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WeatherIcon from "./WeatherIcon";
import Temperatures from "./Temperatures";

import { getTodayString } from "../utils/date";

interface Props {
	day: number;
}

export default function DailyCard({ day }: Props) {
	const { forecast } = useContext(GlobalContext);

	return (
		<section>
			<WeatherIcon weather={forecast.daily[day].weather[0]} />
			<Temperatures typeOfTemps="forecast" day={day} />
			<h3>{getTodayString(true)}</h3>
		</section>
	);
}
