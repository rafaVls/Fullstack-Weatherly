import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { State, Coordinates } from "../common/types";

let initialState: State = {
	latitude: null,
	longitude: null,
	forecast: null,
	cityInfo: null,
	units: "°F"
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export default function GlobalProvider({ children }: any) {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function setCoordinates(latitude: number, longitude: number): void {
		const data = { latitude, longitude };

		dispatch({
			type: "SET_COORDINATES",
			latlon: data
		});
	}

	async function getForecast(
		position: Coordinates,
		unitSystem: string = "imperial"
	) {
		try {
			const lat = position.latitude;
			const lon = position.longitude;
			const units = unitSystem === "imperial" ? "°F" : "°C";

			const res = await fetch(`/onecall/${lat}&${lon}&${unitSystem}`);
			const { data } = await res.json();

			dispatch({
				type: "GET_FORECAST",
				forecast: data,
				units: units
			});
		} catch (error) {
			dispatch({
				type: "ERROR",
				error: error
			});
		}
	}

	async function getCityInfo(position: Coordinates) {
		try {
			const lat = position.latitude;
			const lon = position.longitude;

			const res = await fetch(`/reverse/${lat}&${lon}`);
			const { data } = await res.json();

			dispatch({
				type: "GET_CITY_INFO",
				cityInfo: data
			});
		} catch (error) {
			dispatch({
				type: "ERROR",
				error: error
			});
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				latitude: state.latitude,
				longitude: state.longitude,
				forecast: state.forecast,
				cityInfo: state.cityInfo,
				units: state.units,
				setCoordinates,
				getForecast,
				getCityInfo
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}
