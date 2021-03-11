import React, { useState } from "react";

import styles from "../styles/SearchBar.module.css";

//TODO:
// Make a global function that uses reverse geolocation
// and set that value to cityInfo on submit
export default function SearchBar() {
	const [cityName, setCityName] = useState("");

	return (
		<form
			className={styles.searchForm}
			onSubmit={e => {
				e.preventDefault();
				console.log(cityName);
			}}
		>
			<label htmlFor="citySelector" aria-label="Search forecast by city name">
				Search by city:{" "}
			</label>
			<section className={styles.searchBar}>
				<input
					type="search"
					name="citySelector"
					placeholder="City name"
					value={cityName}
					pattern="[A-Za-z]+( [A-Za-z]+)?( [A-Za-z]+)?( [A-Za-z]+)?"
					title="Only letters and spaces please."
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setCityName(e.target.value)
					}
				/>
				<img
					src={`${process.env.PUBLIC_URL}/loupe.svg`}
					alt="A magnifying glass"
				/>
			</section>
		</form>
	);
}
