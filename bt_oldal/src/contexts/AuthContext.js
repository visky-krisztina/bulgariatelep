import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		const storedUsername = localStorage.getItem("username");
		if (token) {
			setIsLoggedIn(true);
			setUsername(storedUsername || "");
		} else {
			setIsLoggedIn(false);
			setUsername("");
		}
	}, []);

	const login = (user) => {
		setIsLoggedIn(true);
		setUsername(user.username);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setUsername("");
		localStorage.removeItem("token");
		localStorage.removeItem("username");
	};

	return <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>{children}</AuthContext.Provider>;
};
