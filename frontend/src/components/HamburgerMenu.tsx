// The hamburger menu part of this
// component was made by Erik Terwen
// Codepen: https://codepen.io/erikterwan

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import styles from "../styles/HamburgerMenu.module.css";

export default function HamburgerMenu() {
	const { latitude, longitude, getForecast } = useContext(GlobalContext);

	function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		getForecast({ latitude, longitude }, e.currentTarget.value);

		const buttons: Element[] = Array.from(
			document.getElementsByClassName("unitsButton")
		);
		buttons.forEach(element => {
			element.classList.remove(`${styles.selected}`);
		});

		const button = e.target as HTMLElement;
		button.classList.add(`${styles.selected}`);
	}

	return (
		<nav role="navigation">
			<div className={styles.menuToggle}>
				<input type="checkbox" className={styles.hamburger} />
				<span className={styles.hamburgerLevel}></span>
				<span className={styles.hamburgerLevel}></span>
				<span className={styles.hamburgerLevel}></span>

				<section className={styles.menu}>
					<section className={styles.buttons}>
						<button
							className={`${styles.unitsBtn} ${styles.farenheit} ${styles.selected} unitsButton`}
							value="imperial"
							onClick={e => clickHandler(e)}
						>
							°F
						</button>
						<button
							className={`${styles.unitsBtn} ${styles.celsius} unitsButton`}
							value="metric"
							onClick={e => clickHandler(e)}
						>
							°C
						</button>
					</section>
				</section>
			</div>
		</nav>
	);
}
