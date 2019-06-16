import axios from 'axios';
import router from '../router';
const request = axios.create();

// 添加响应拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return {
            ...config,
            headers:{
                ...config.headers,
                token:window.localStorage.getItem('token')
            }
    }
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    const reponse=error.response;
    const status=reponse.status;
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

export default {
    get(url,data){
        request.get(url,{
            params:data
        })
    },
    post(url,data){
        request.post(url,data)
    }
}