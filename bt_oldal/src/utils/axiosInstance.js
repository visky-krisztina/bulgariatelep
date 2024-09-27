import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000/",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token"); // Get token from localStorage
		if (token) {
			config.headers.Authorization = `Bearer ${token}`; // Attach token to request headers
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default axiosInstance;
