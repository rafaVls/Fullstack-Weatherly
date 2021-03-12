// The hamburger menu part of this
// component was made by Erik Terwan
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
			element.setAttribute("aria-pressed", "false");
		});

		const button = e.target as HTMLElement;
		button.setAttribute("aria-pressed", "true");
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
							aria-pressed="true"
							onClick={e => clickHandler(e)}
						>
							°F
						</button>
						<button
							className={`${styles.unitsBtn} ${styles.celsius} unitsButton`}
							value="metric"
							aria-pressed="false"
							onClick={e => clickHandler(e)}
						>
							°C
						</button>
					</section>
					<br />
					<div>
						Search icon made by{" "}
						<a
							href="https://www.freepik.com"
							title="Freepik"
							rel="noreferrer"
							target="_blank"
						>
							Freepik
						</a>{" "}
						from{" "}
						<a
							href="https://www.flaticon.com/"
							title="Flaticon"
							rel="noreferrer"
							target="_blank"
						>
							www.flaticon.com
						</a>
					</div>
				</section>
			</div>
		</nav>
	);
}
