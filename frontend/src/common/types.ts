export type State = {
	latitude: number | null;
	longitude: number | null;
	forecast: Forecast | null;
	cityInfo: CityInfo[] | null;
	error?: object;
	setCoordinates: (latitude: number, longitude: number) => void;
	getForecast: (position: Coordinates) => void;
	getCityInfo: (position: Coordinates) => void;
};

export type Actions =
	| { type: "SET_COORDINATES"; latlon: Coordinates }
	| { type: "GET_FORECAST"; forecast: Forecast }
	| { type: "GET_CITY_INFO"; cityInfo: CityInfo[] }
	| { type: "ERROR"; error: object };

export interface Coordinates {
	latitude: number | null;
	longitude: number | null;
}

interface Forecast {
	timezone: string | null;
	timezone_offset: number | null;
	current: Current | null;
	hourly: Hourly[] | null;
	daily: Daily[] | null;
}

interface Current {
	dt: number | null;
	sunrise: number | null;
	sunset: number | null;
	temp: number | null;
	feels_like: number | null;
	pressure: number | null;
	humidity: number | null;
	dew_point: number | null;
	uvi: number | null;
	clouds: number | null;
	visibility: number | null;
	wind_speed: number | null;
	wind_deg: number | null;
	weather: Weather[] | null;
}

interface Hourly {
	dt: number | null;
	temp: number | null;
	feels_like: number | null;
	pressure: number | null;
	humidity: number | null;
	dew_point: number | null;
	uvi: number | null;
	clouds: number | null;
	visibility: number | null;
	wind_speed: number | null;
	wind_deg: number | null;
	weather: Weather[] | null;
	pop: number | null;
	rain: { "1h": number } | null;
}

interface Daily {
	dt: number | null;
	sunrise: number | null;
	sunset: number | null;
	temp: Temp | null;
	feels_like: Feels_like | null;
	pressure: number | null;
	humidity: number | null;
	dew_point: number | null;
	wind_speed: number | null;
	wind_deg: number | null;
	weather: Weather[] | null;
	clouds: number | null;
	pop: number | null;
	rain: number | null;
	uvi: number | null;
}

interface Temp {
	day: number | null;
	min: number | null;
	max: number | null;
	night: number | null;
	eve: number | null;
	morn: number | null;
}

interface Feels_like {
	day: number | null;
	night: number | null;
	eve: number | null;
	morn: number | null;
}

interface Weather {
	id: number | null;
	main: string | null;
	description: string | null;
	icon: string | null;
}

interface CityInfo {
	long_name: string | null;
	short_name: string | null;
	types: string[] | null;
}
