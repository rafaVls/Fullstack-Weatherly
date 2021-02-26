import React from "react";
import ForecastItems from "./ForecastItems";

import styles from "../styles/CurrentData.module.css";

export default function CurrentData({ forecast, cityInfo }: any) {
	return (
		<section className={styles.dataContainer}>
			<section className={styles.mainContent}>
				<h3>{forecast.current.temp} °K</h3>
				<h3>
					{cityInfo[0].long_name}, {cityInfo[2].short_name}
				</h3>
			</section>

			<ForecastItems forecast={forecast} />
		</section>
	);
}
