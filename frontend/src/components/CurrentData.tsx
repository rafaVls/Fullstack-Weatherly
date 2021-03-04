import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItems from "./ForecastItems";

import styles from "../styles/CurrentData.module.css";

export default function CurrentData() {
	const { forecast, cityInfo } = useContext(GlobalContext);

	return (
		<section className={styles.dataContainer}>
			<section className={styles.mainContent}>
				<h3>Temperature °K</h3>
				<h3>Alpine, CA</h3>
			</section>

			<ForecastItems forecast={forecast} />
		</section>
	);
}
