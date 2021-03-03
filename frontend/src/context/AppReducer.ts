import { State, Actions } from "../common/types";

export default function AppReducer(state: State, action: Actions): State {
	switch (action.type) {
		case "SET_COORDINATES":
			return {
				...state,
				latitude: action.latlon.latitude,
				longitude: action.latlon.longitude
			};

		case "GET_FORECAST":
			return {
				...state,
				forecast: action.forecast
			};

		case "GET_CITY_INFO":
			return {
				...state,
				cityInfo: action.cityInfo
			};

		case "ERROR":
			return {
				...state,
				error: action.error
			};

		default:
			return state;
	}
}
