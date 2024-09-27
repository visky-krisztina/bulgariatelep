import React, { useState } from "react";
import "./dropdown.styles.scss";
import { Link } from "react-router-dom";

function Dropdown({ menuItems }) {
	const [click, setClick] = useState(false);

	return (
		<>
			<ul className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
				{menuItems.map((item, index) => (
					<li key={index}>
						<Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
							{item.title.toUpperCase()}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Dropdown;
