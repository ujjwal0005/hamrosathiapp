import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseUrl = "https://hamrosath.herokuapp.com";

export const createblog = async(title,content,blogimage,userToken) => {
	console.log('blogtoken',userToken)
	const formdata = new FormData()
	formdata.append('image',{
	  uri:blogimage,
	  type:'image/jpg',
	  name:blogimage.split("/").pop()
	})
	formdata.append('title',title);
	formdata.append('content',content);
	console.log(formdata.title)
	try {
		const {data,status} = await axios({
			method: "post",
			url: `${baseUrl}/blog/`,
			data: formdata,
			headers: {
				"Authorization" : `Token ${userToken}`,
				"Content-Type" : 'multipart/form-data'	
			}
		});
		// console.log(data)
		return {data,status};
	} catch (error) {
		console.log("Failed to create blog", error)
		return {
			status: "failed",
			message: error.message
		};
	}
};

export const blogs = async(userToken) =>{
	console.log('ddd',userToken)
	try{
		const{data, status} = await axios({
			method: "get",
			url: `${baseUrl}/blogs/`,
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

export const doctors = async(userToken) =>{
	console.log('authtoken api',userToken)
	try{
		const{data, status} = await axios({
			method: "get",
			url: `${baseUrl}/getdoctors/`,
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
		console.log('doctor error', error.response.data)
		return { status: "failed", message: error.message };
	}
}

export const getdoctor = async(userToken,id) =>{
	console.log('authtoken api',userToken,id)
	try{
		const{data, status} = await axios({
			method: "get",
			url: `${baseUrl}/getdoctor/${id}`,
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
		console.log('doctor error', error.response.data)
		return { status: "failed", message: error.message };
	}
}

export const bookappointment = async(userToken,user,date,starttime,endtime,doctor) =>{	
	try{
		const{data, status} = await axios({
			method: "post",
			url: `${baseUrl}/appointment/`,
			data: {
				'user':user,
				'date':date,
				'starttime':starttime,
				'endtime':endtime,
				'doctor':doctor,
			},
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
		console.log('doctor error', error.response)
		return { status: "failed", message: error.message };
	}
}

export const getuserappointment = async(userToken) =>{
	console.log('authtoken api',userToken)
	try{
		const{data, status} = await axios({
			method: "get",
			url: `${baseUrl}/userappointment/`,
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
		console.log('doctor error', error.response.data)
		return { status: "failed", message: error.message };
	}
}

export const getdoctorappointment = async(userToken) =>{
	console.log('authtoken api',userToken)
	try{
		const{data, status} = await axios({
			method: "get",
			url: `${baseUrl}/doctorappointment/`,
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
		console.log('doctor error', error.response.data)
		return { status: "failed", message: error.message };
	}
}