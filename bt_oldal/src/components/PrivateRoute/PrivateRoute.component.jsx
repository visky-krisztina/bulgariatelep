import React from "react";
import { Route, Redirect } from "react-router-dom";

// PrivateRoute component
const PrivateRoute = ({ component: Component, ...rest }) => {
	// Check if token is present in localStorage (or check authentication in some way)
	const isAuthenticated = !!localStorage.getItem("token");

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} /> // If authenticated, render the passed component
				) : (
					<Redirect to='/login' /> // If not authenticated, redirect to login
				)
			}
		/>
	);
};

export default PrivateRoute;
