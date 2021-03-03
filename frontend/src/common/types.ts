export type State = {
	latitude: number | null;
	longitude: number | null;
	forecast: Forecast | null;
	cityInfo: CityInfo | null;
	error?: object;
	setCoordinates: (latitude: number, longitude: number) => void;
	getForecast: (position: Coordinates) => void;
	getCityInfo: (position: Coordinates) => void;
};

export type Actions =
	| { type: "SET_COORDINATES"; latlon: Coordinates }
	| { type: "GET_FORECAST"; forecast: Forecast }
	| { type: "GET_CITY_INFO"; cityInfo: CityInfo }
	| { type: "ERROR"; error: object };

export interface Coordinates {
	latitude: number | null;
	longitude: number | null;
}

interface Forecast {
	timezone: string | null;
	timezone_offset: number | null;
	current: object | null;
	hourly: object[] | null;
	daily: object[] | null;
}

interface CityInfo {
	long_name: string | null;
	short_name: string | null;
}
