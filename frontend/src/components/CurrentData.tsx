import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ForecastItems from "./ForecastItems";

import styles from "../styles/CurrentData.module.css";

export default function CurrentData() {
	const { forecast, cityInfo } = useContext(GlobalContext);

	return (
		<section className={styles.dataContainer}>
			{cityInfo && (
				<section className={styles.mainContent}>
					<h3>{forecast.current.temp} °K</h3>
					<h3>
						{cityInfo[0].long_name}, {cityInfo[2].short_name}
					</h3>
				</section>
			)}

			<ForecastItems />
		</section>
	);
}
