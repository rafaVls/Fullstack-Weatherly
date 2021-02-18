import React, { useState, useEffect } from "react";

export default function App() {
	const [location, setLocation] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			pos => {
				let coordinates = pos.coords;
				setLocation(coordinates);
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
			<h3>Hello World</h3>
		</section>
	);
}
