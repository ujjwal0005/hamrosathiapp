import axios from "axios";


const baseUrl = "http://127.0.0.1:8000";

export const handleLogin = async (username, password) => {
	try {
		const { data, status } = await axios({
			method: "post",
			url: `${baseUrl}/login/`,
			data: {
				username: username,
				password: password
			},
		});
		return { data, status };
	} catch (error) {
		return { status: "failed", message: error.message };
	}
};

export const handleRegister = async (name, password, confirm_password, email, number, gender, dob) => {
	try {
		const {
			data,
			status
		} = await axios({
			method: "post",
			url: `${baseUrl}/register/`,
			data: {
				name: name,
				password: password,
				// password2: confirm_password,
				email: email,
				number: number,
				gender: gender,
				dob: dob
			},
		});
		return {
			data,
			status
		};
	} catch (error) {
		console.log("heoeore", error)
		return {
			status: "failed",
			message: error.message
		};
	}
};