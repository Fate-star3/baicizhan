//配置对象
import axios from 'axios'
// const baseUrl = "http://localhost:3030"



// 可以使用自定义配置新建一个 axios 实例 axios.create([config])
// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });
export const axiosInstance = axios.create({
    // baseURL: baseUrl,
    method: "get",
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default

})


// 拦截器
// 在请求或响应被 then 或 catch 处理前拦截它们。
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误');
    }
)

