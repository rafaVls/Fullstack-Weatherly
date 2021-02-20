export function unixToDate(
	unixTimestamp: number,
	tzString: string = "America/Los_Angeles"
) {
	const miliseconds = unixTimestamp * 1000;
	const date = new Date(miliseconds);

	return date.toLocaleDateString("en-GB", { timeZone: tzString });
}
