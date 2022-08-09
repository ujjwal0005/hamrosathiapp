import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseUrl = "https://hamrosath.herokuapp.com";

export const createblog = async (userToken,title,content,image) => {
	console.log('usertoken',userToken)
	postData={
		title: title,
		content: content,
		image: image,
	}
	console.log(postData)
	try {
		const {data,status} = await axios({
			method: "post",
			url: `${baseUrl}/blog/`,
			data: postData,
			headers: {
				"Authorization" : `Token ${userToken}`	
			}
		});
		console.log(data)
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
