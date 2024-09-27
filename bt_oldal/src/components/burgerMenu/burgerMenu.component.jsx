import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import "./burgerMenu.styles.scss";
import test from "../../assets/test.png";
import { DataContext } from "../../contexts/DataProvider.js";

const BurgerMenu = ({ isOpen, toggle }) => {
	const { navItems } = useContext(DataContext);

	return (
		<div>
			<div
				className={`dropdownContainer ${isOpen ? "dropdownContainer--on" : "dropdownContainer--off"}`}
				onClick={toggle}
			>
				<Link to='/' className='dropdown-navbar-logo'>
					<img id='dropdown-logo-img' src={test} alt='Bulgariatelep church'></img>
					<p> Főoldal </p>
				</Link>
				<div className='icon' onClick={toggle}>
					<MdClose className='closeIcon' />
				</div>
				<div className='dropdownWrapper'>
					<div className='dropdownMenu'>
						{navItems.map((item, index) => (
							<Link className='dropdownLink' to={item.path} key={index}>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
