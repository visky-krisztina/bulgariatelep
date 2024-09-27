import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import "./footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	const { isLoggedIn, logout } = useContext(AuthContext);

	return (
		<div className='social-container'>
			<h5>Copyright © 2021 Bulgáriatelepi Református Gyülekezet | All rights reserved </h5>
			<div className='social-right'>
				<a
					href='https://www.youtube.com/channel/UCtnAa5sBmRm5nru4IxrBqpg'
					target='_blank'
					rel='noopener noreferrer'
					className='youtube social'
				>
					<FontAwesomeIcon icon={faYoutube} size='2x' />
				</a>
				<a
					href='https://www.facebook.com/BulgariaTelep/'
					target='_blank'
					rel='noopener noreferrer'
					className='facebook social'
				>
					<FontAwesomeIcon icon={faFacebook} size='2x' />
				</a>
				<h5>
					Page created by |{" "}
					<a href='www.viskykrisztina.onrender.com' target='_blank'>
						Visky Krisztina
					</a>
				</h5>
				{!isLoggedIn ? (
					<h5>
						<Link className='login-button' to='/login'>
							Login
						</Link>
					</h5>
				) : (
					<h5>
						<button className='logout-button' onClick={logout}>
							Logout
						</button>
					</h5>
				)}
			</div>
		</div>
	);
};

export default Footer;
