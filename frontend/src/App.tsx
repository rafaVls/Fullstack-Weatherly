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

	return (
		<section>
			<h3>{location.latitude}</h3>
			<h3>{location.longitude}</h3>
		</section>
	);
}
