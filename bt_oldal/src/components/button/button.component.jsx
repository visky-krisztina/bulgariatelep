import React from "react";
import "./button.styles.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
	const handleClick = () => {
		if (props.to.startsWith("http://") || props.to.startsWith("https://")) {
			// Open external URL
			window.open(props.to, "_blank");
		}
	};

	if (props.to.startsWith("http://") || props.to.startsWith("https://")) {
		// Render external link
		return (
			<button className='btn-button' onClick={handleClick}>
				{props.buttonLabel}
			</button>
		);
	}
	return (
		<Link className='btn-button' target='_blank' to={props.to}>
			{props.buttonLabel}
		</Link>
	);
};

export default Button;
