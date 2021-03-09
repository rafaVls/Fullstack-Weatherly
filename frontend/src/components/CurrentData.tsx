import React from "react";
import ForecastItems from "./ForecastItems";
import MainContent from "./MainContent";
import DailyCards from "./DailyCards";

import styles from "../styles/CurrentData.module.css";

export default function CurrentData() {
	return (
		<section className={styles.dataContainer}>
			<MainContent />
			<ForecastItems />
			<DailyCards />
		</section>
	);
}
