import React from "react";
import "./predikaciok.styles.scss";

const Predikacio = ({ sermons }) => {
	const capitalName = (text) => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};

	return (
		<>
			{sermons.map((sermon) => {
				const { id, date, title, pastor, book, series, fb_link } = sermon;
				return (
					<tr key={id}>
						<td>{date}</td>
						<td>
							<a href={fb_link}>{capitalName(title)}</a>
						</td>
						<td>{capitalName(pastor)}</td>
						<td>{capitalName(book)}</td>
						<td>{capitalName(series)}</td>
					</tr>
				);
			})}
		</>
	);
};

export default Predikacio;
