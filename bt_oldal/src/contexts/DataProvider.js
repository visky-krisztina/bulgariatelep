import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [sectionData, setSectionData] = useState([]);
	const [navItems, setNavItems] = useState([]);
	const [hero, setHero] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const navbarResponse = await axios.get("/api/other/navbar-items/");
				setNavItems(navbarResponse.data);

				const itemsResponse = await axios.get("/api/items/");
				setSectionData(itemsResponse.data);

				const heroResponse = await axios.get("/api/other/hero/");
				setHero(heroResponse.data);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		}
		fetchData();
	}, []);

	return <DataContext.Provider value={{ sectionData, navItems, hero }}>{children}</DataContext.Provider>;
};
