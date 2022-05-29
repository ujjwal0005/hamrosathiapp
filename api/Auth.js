import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

export const handleLogin = async (username, password) => {
// 	fetch(`${baseUrl}/login/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//   },
//   body: JSON.stringify({
//     username : username,
//     password : password
//   })
// }).then((response) => response.json())
// .then((json) => {
//   console.log('hello json',json)
// })
// .catch((error) => {
//   console.error('hello error',error);
// });
	
	try {
		// console.log(url)
		const res = await axios({
			method: "post",
			url: `${baseUrl}/login/`,
			data: {
				username: username,
				password: password
			},
		});
		console.log('api response',res)
		// return { data, status };
	} catch (error) {
        console.log("heoeore", error)
		return { status: "failed", message: error.message };
	}
}; 

export const handleRegister = async (name,password,password2,email,number,gender,dob) => {
	try {
		const { data, status } = await axios({
			method: "post",
			url: `${baseUrl}/register/`,
			data: {
				name: name,
				password: password,
				password2 : confirm_password,
				email : email,
				number: number,
				gender:gender,
				dob:dob
			},
		});
		return { data, status };
	} catch (error) {
        console.log("heoeore", error)
		return { status: "failed", message: error.message };
	}
}; 

