import axios from "axios";

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
	console.log(formdata.image)
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

export const bookappointment = async(userToken,userid,dd,starttime,endtime,doctor,image,desc) =>{
	try{
	const formdata = new FormData()
	formdata.append('report',{
		uri:image,
		type:'image/jpg',
		name:image.split("/").pop()
	})
	console.log(formdata.report)
	formdata.append('user', userid);
	formdata.append('date', dd);
	formdata.append('starttime', starttime);
	formdata.append('endtime', endtime);
	formdata.append('doctor', doctor);
	formdata.append('description', desc);
	formdata.append('usertoken',userToken)
	const{data, status} = await axios({
		method: "post",
		url: `${baseUrl}/appointment/`,
		data: formdata,
		headers: {
			"Authorization" : `Token ${userToken}`,
			"Content-Type" : 'multipart/form-data'		
		}
	});
		// console.log(data)
		return {data,status};
	}catch (error) {
		console.log('jsdkjsdlkjsdj', error)
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

export const updatedoctorappointment = async(userToken,verify,cancle,complete,remarks,id)=>{
	try{
		const formdata = new FormData()
		formdata.append('is_verified', verify);
		formdata.append('is_cancelled', cancle);
		formdata.append('is_completed', complete);
		formdata.append('remarks', remarks);
		const{data, status} = await axios({
			method: "put",
			url: `${baseUrl}/updateappointment/${id}`,
			data: formdata,
			headers: {
				"Authorization" : `Token ${userToken}`,
				"Content-Type" : 'multipart/form-data'		
			}
		});
			// console.log(data)
			return {data,status};
		}catch (error) {
			console.log('jsdkjsdlkjsdj', error)
			return { status: "failed", message: error.message };
		}
}