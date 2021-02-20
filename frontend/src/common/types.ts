export interface Coordinates {
	latitude: number | null;
	longitude: number | null;
}

export interface Forecast {
	timezone: string | null;
	timezone_offset: number | null;
	current: object | null;
	hourly: object[] | null;
	daily: object[] | null;
}

export interface CityInfo {
	long_name: string | null;
	short_name: string | null;
}
