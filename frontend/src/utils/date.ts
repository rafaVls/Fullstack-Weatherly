export function getTodayString(
	isDaily: boolean = false,
	language: string = "en-US"
): string {
	const today = new Date();
	const todayString = today
		.toLocaleString(language, {
			year: "numeric",
			month: "short",
			day: "numeric"
		})
		.replace(",", "");

	let weekday;
	if (language.includes("es")) {
		weekday = [
			"Domingo",
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sábado"
		];
	} else {
		weekday = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
	}

	if (isDaily) {
		return weekday[today.getDay()].substring(0, 3);
	}

	return `${weekday[today.getDay()]}, ${todayString}`;
}
