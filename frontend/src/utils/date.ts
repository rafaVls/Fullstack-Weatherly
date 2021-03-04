export function getTodayString(language: string = "en-US"): string {
	const today = new Date();
	const options = { year: "numeric", month: "short", day: "numeric" };
	const todayString = today.toLocaleString(language, options).replace(",", "");

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

	return `${weekday[today.getDay()]}, ${todayString}`;
}
