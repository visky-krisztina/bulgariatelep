import React, { useState, useContext } from "react";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/dropdown.component";
import { VscArrowSmallDown } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import test from "../../assets/test.png";
import { DataContext } from "../../contexts/DataProvider.js";

function Navbar({ toggle }) {
	const [dropdown, setDropdown] = useState(false);
	const { navItems } = useContext(DataContext);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<>
			<nav className='navbar'>
				<Link to='/' className='navbar-logo'>
					<img id='logo-img' src={test} alt='Bulgariatelep church'></img>
					<div className='logo-text'>
						<p>Bulgáriatelepi</p>
						<p>Református Gyülekezet</p>
					</div>
				</Link>

				<div className='menuBars' onClick={toggle}>
					<FaBars />
				</div>

				<ul className='nav-menu'>
					{navItems.map((item, index) => (
						<li
							key={index}
							className={`nav-item ${item.cName}`}
							onMouseEnter={item.sub_items.length > 0 ? onMouseEnter : undefined}
							onMouseLeave={item.sub_items.length > 0 ? onMouseLeave : undefined}
						>
							<Link to={item.path} className='nav-links'>
								{item.title}
								{item.sub_items.length > 0 && <VscArrowSmallDown className='dropdownArrow' />}
							</Link>
							{dropdown && item.sub_items.length > 0 && <Dropdown menuItems={item.sub_items} />}
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
