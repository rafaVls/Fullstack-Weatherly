import React from "react";
import ForecastItems from "./ForecastItems";
import MainContent from "./MainContent";

import styles from "../styles/CurrentData.module.css";
import DailyCard from "./DailyCard";

export default function CurrentData() {
	return (
		<section className={styles.dataContainer}>
			<MainContent />
			<ForecastItems />
			<DailyCard day={7} />
		</section>
	);
}
