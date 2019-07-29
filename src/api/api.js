//进行远程调用
import axios from 'axios'
//包装param参数
import qs from 'qs'

axios.defaults.timeout = 5000; //超时终止请求
axios.defaults.baseURL ='http://localhost:443/'; //配置请求地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


//声明一个调用方法
export const requestLogin = params => {return axios.post('/user/login',qs.stringify(params)).then(res => res.data)}
