import axios from "axios";

import router from "../router/index";

const request = axios.create({
    baseURL:'http://172.23.45.62:3000'
});


//添加请求拦截器
request.interceptors.request.use((config)=>{
    // console.log(config)
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    }
},(error)=>{
     // 对请求错误做些什么
    return Promise.reject(error)
})
//响应之前拦截

request.interceptors.response.use((respose)=>{
    // 对响应数据做点什么
    return respose.data;
},(error)=>{
    // 对响应错误做点什么
    const response = error.response;
    const status = response.status;
    switch (status) {
        case 401:
            router.push('/login')
            break;
        case 404:
            alert('页面丢失')
            break;
        case 405:
            alert('该用户没有权限')
            break;
        default:
            alert('网络链接失败')
            break;
    }
    return Promise.reject(error);
  });


export default{
    get(url,data){
       return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
}