import React from "react";
import { Link } from "react-router-dom";

import "./smallCard.styles.scss";

const Card = (props) => (
	<div className={`card-box ${props.styleMargin}`}>
		<div className='logo-container'>
			<img className='logo-img' src={props.src} alt={props.alt} />
		</div>

		<div className='text-container'>
			<Link className='title-style' to={{ pathname: `/${props.alt.toLowerCase()}` }}>
				{props.title}
			</Link>
			<p id='card-text'>{props.subTitle}</p>
		</div>
	</div>
);

export default Card;
