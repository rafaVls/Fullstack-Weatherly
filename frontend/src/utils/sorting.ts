import { CityInfo } from "../common/types";

export function getStateShort(location: CityInfo[]) {
	const stateShort = location.filter(item =>
		item.types.includes("administrative_area_level_1")
	)[0].short_name;

	return stateShort;
}
