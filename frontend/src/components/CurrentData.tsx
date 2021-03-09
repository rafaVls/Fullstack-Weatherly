import React from "react";
import ForecastItems from "./ForecastItems";
import MainContent from "./MainContent";
import DailyCard from "./DailyCard";

import styles from "../styles/CurrentData.module.css";

export default function CurrentData() {
	return (
		<section className={styles.dataContainer}>
			<MainContent />
			<ForecastItems />
			<DailyCard day={1} />
		</section>
	);
}
