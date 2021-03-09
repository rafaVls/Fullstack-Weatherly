import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WeatherIcon from "./WeatherIcon";
import Temperatures from "./Temperatures";

interface Props {
	day: number;
}

export default function DailyCard({ day }: Props) {
	const { forecast } = useContext(GlobalContext);

	return (
		<section>
			<WeatherIcon weather={forecast.daily[day].weather[0]} />
			<Temperatures typeOfTemps="forecast" day={day} />
		</section>
	);
}
