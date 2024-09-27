import React, { useContext, useState } from "react";
import axiosInstance from "../../utils/axiosInstance.js";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import "./login.styles.scss";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const { login } = useContext(AuthContext);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axiosInstance.post("/api/user/login/", { username, password });
			const { token, username: responseUsername } = response.data;
			if (responseUsername) {
				localStorage.setItem("token", token);
				localStorage.setItem("username", responseUsername);
				login({ username }); // Update context
				history.push("/");
			} else {
				console.error("Username not found in response");
			}
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	return (
		<div className='login-container'>
			<form onSubmit={handleSubmit} className='login-form'>
				<h2>Login</h2>
				<div>
					<label>Username</label>
					<input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
				</div>
				<div>
					<label>Password</label>
					<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
				</div>
				<button className='submit-button' type='submit'>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
