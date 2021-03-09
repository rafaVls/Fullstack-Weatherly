import React from "react";

interface Props {
	children: string;
	data: string;
}

export default function ForecastItem({ children, data }: Props) {
	return (
		<li>
			<p>{children}</p>
			<p>{data}</p>
		</li>
	);
}
