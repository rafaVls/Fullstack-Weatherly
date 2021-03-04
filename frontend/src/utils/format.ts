export function unixToDate(
	unixTimestamp: number,
	timeZone: string = "America/Los_Angeles"
): string {
	const miliseconds = unixTimestamp * 1000;
	const date = new Date(miliseconds);

	return date.toLocaleTimeString("en-GB", { timeZone });
}
