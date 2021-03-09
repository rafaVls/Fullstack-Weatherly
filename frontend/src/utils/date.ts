const today = new Date();

function weekdaysLanguage(language: string): string[] {
	if (language.includes("es")) {
		return [
			"Domingo",
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sábado"
		];
	} else {
		return [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
	}
}

export function getTodayString(language: string = "en-US"): string {
	const weekday = weekdaysLanguage(language);
	const todayString = today
		.toLocaleString(language, {
			year: "numeric",
			month: "short",
			day: "numeric"
		})
		.replace(",", "");

	return `${weekday[today.getDay()]}, ${todayString}`;
}

export function getDailyInitials(day: number, language: string = "en-US") {
	const weekday = weekdaysLanguage(language);

	return weekday[today.getDay() + day].substring(0, 3);
}
