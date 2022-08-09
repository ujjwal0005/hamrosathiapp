import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = "https://hamrosath.herokuapp.com";

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
		await AsyncStorage.setItem("Token",data.token) 
		return { data, status };
	} catch (error) {
		return { status: "failed", message: error.message };
	}
};

// export const logout = async() =>{
// 	header = {
// 		"Authorization" : `Token ${AsyncStorage.getItem('Token')}`
// 	}
// 	try{
// 		const{data, status} = await axios({
// 			method: "get",
// 			url: `${baseUrl}/logout/`,
// 			header:header
// 		});
// 		await AsyncStorage.remove()
// 	}catch (error) {
// 		return { status: "failed", message: error.message };
// 	}
// }

export const userprofile = async(userToken) =>{
	console.log('ddd',userToken)
	try{
		const{data, status} = await axios({
			method: "get",
			url: `${baseUrl}/userprofile/`,
			headers: {
				"Authorization" : `Token ${userToken}`	
			}
		});
		console.log(data)
		return {
			data,
			status
		};
	}catch (error) {
		console.log('dddeee', error.response.data)
		return { status: "failed", message: error.message };
	}
}

export const handleRegister = async (name,email,number,password,confirm_password,gender,dob,is_doctor) => {
	postData={
		name: name,
		password: password,
		password2: confirm_password,
		email: email,
		number: number,
		gender: gender,
		dob: dob,
		is_doctor: is_doctor
	}
	console.log(postData)
	try {
		const {data,status} = await axios({
			method: "post",
			url: `${baseUrl}/register/`,
			data: postData,
		});
		console.log(data)
		return {data,status};
	} catch (error) {
		console.log("heoeore", error)
		return {
			status: "failed",
			message: error.message
		};
	}
};