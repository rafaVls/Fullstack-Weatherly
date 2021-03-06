import { CityInfo } from "../common/types";

export function getStateShort(location: CityInfo[]): string {
	const stateShort = location.filter(item =>
		item.types.includes("administrative_area_level_1")
	)[0].short_name;

	return stateShort;
}

export function getDayIcon(icon: string): string {
	return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}
