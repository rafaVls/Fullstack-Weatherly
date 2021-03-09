import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import DailyCard from "./DailyCard";

import styles from "../styles/DailyCards.module.css";

export default function DailyCards() {
	const { forecast } = useContext(GlobalContext);

	const Cards = forecast.daily.map((item, index) => {
		if (index === 0) {
			// eslint-disable-next-line array-callback-return
			return;
		}

		return <DailyCard key={index} day={index} />;
	});

	return <ul className={styles.container}>{Cards}</ul>;
}
