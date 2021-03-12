import React, { FormEvent, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
	const { getCoordinates } = useContext(GlobalContext);
	const [cityName, setCityName] = useState("");
	const regexPattern =
		"[A-Za-z]+( [A-Za-z]+)?( [A-Za-z]+)?( [A-Za-z]+)?( [A-Za-z]+)?";

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (cityName.match(regexPattern)) {
			getCoordinates(cityName.replaceAll(" ", "-"));
		}
	}

	return (
		<form className={styles.searchForm} onSubmit={e => handleSubmit(e)}>
			<label htmlFor="citySelector" aria-label="Search forecast by city name">
				Search by city:{" "}
			</label>
			<section className={styles.searchBar}>
				<input
					type="search"
					name="citySelector"
					placeholder="City name"
					value={cityName}
					pattern={regexPattern}
					title="Only letters and spaces please, no commas."
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setCityName(e.target.value)
					}
				/>
				<button aria-label="search"></button>
			</section>
		</form>
	);
}
