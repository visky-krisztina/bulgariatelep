import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
	const history = useHistory();

	useEffect(() => {
		// Remove token from localStorage
		localStorage.removeItem("token");

		// Redirect to the login page or homepage
		history.push("/");
	}, [history]);

	return <div className='logout-button'>Logging out</div>;
};

export default Logout;
