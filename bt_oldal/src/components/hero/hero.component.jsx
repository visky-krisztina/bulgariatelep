import React from "react";
import "./hero.styles.scss";

function Hero(props) {
	return (
		<>
			<div class='top-banner-section'>
				<div className='color-banner'></div>
				<div class='banner-image-div'>
					<img class='banner-image' src={props.src} alt='Banner' />
				</div>

				<div class='banner-overlay-div'></div>
			</div>
			<div class='banner-text-div'>
				<h1 className='heroTitle'>{props.title.toUpperCase()}</h1>
				<p className='bibleVerse'>{props.bibleVerse}</p>
			</div>
		</>
	);
}

export default Hero;
