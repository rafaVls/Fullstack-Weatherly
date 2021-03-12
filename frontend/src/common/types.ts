export type State = {
	latitude: number | null;
	longitude: number | null;
	forecast: Forecast | null;
	cityInfo: CityInfo[] | null;
	units: Units;
	error?: object;
	setCoordinates?: (latitude: number, longitude: number) => void;
	getForecast?: (position: Coordinates, unitSystem?: string) => void;
	getCityInfo?: (position: Coordinates) => void;
	getCoordinates?: (cityName: string) => void;
};

export type Actions =
	| { type: "SET_COORDINATES"; latlon: Coordinates }
	| { type: "GET_FORECAST"; forecast: Forecast; units: Units }
	| { type: "GET_CITY_INFO"; cityInfo: CityInfo[] }
	| { type: "ERROR"; error: object };

interface Units {
	temp: string;
	wind: string;
	name: string;
}

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
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_gust?: number;
	wind_deg: number;
	weather: Weather[];
}

interface Hourly {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_gust?: number;
	wind_deg: number;
	weather: Weather[];
	pop: number;
	rain?: { "1h": number };
}

interface Daily {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: Temp;
	feels_like: Feels_like;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	weather: Weather[];
	clouds: number;
	pop: number;
	rain?: number;
	snow?: number;
	uvi: number;
}

interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}

interface Feels_like {
	day: number;
	night: number;
	eve: number;
	morn: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface CityInfo {
	long_name: string | null;
	short_name: string | null;
	types: string[] | null;
}
