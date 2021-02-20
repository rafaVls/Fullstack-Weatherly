import React, { useState, useEffect } from "react";

export default function App() {
	interface Coordinates {
		latitude: number | null;
		longitude: number | null;
	}

	const [location, setLocation] = useState<Coordinates>({
		latitude: null,
		longitude: null
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			pos => {
				let coordinates = pos.coords;
				const { latitude, longitude } = coordinates;
				setLocation({ latitude, longitude });
			},
			err => {
				console.warn(`Error(${err.code}): ${err.message}`);
			},
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			}
		);
	}, []);

	async function handleClick() {
		const res = await fetch(
			`http://localhost:5000/${location.latitude}&${location.longitude}`
		);
		const data = await res.json();
		console.log(data);
	}

	return (
		<section>
			<button onClick={() => handleClick()}>Click!</button>
			<h3>{location.latitude}</h3>
			<h3>{location.longitude}</h3>
		</section>
	);
}
