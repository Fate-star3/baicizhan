//配置对象
import axios from 'axios'
const baseUrl = "http://localhost:3030"



// 可以使用自定义配置新建一个 axios 实例 axios.create([config])
// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });
export const axiosInstance = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: baseUrl,
    method: "get",
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default
    timeout: 5000,//请求超时时间
    proxy: {
        host: '127.0.0.1',
        port: 3000,
        auth: {
            username: 'zs',
            password: '123'
        }
    },
})


// 拦截器
// 在请求或响应被 then 或 catch 处理前拦截它们。
// axiosInstance.interceptors.response.use(
//     res => res.data,
//     err => {
//         console.log(err, '网络错误');
//     }
// )

axiosInstance.interceptors.response.use(
    response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
            data = response.request.responseText
        } else {
            data = response.data
        }
        // 根据返回的code值来做不同的处理（和后端约定）
        switch (data.code) {
            case '0':
                data.msg = "成功"
                break;
            case '1':
                data.msg = '失败'
            default:
        }
        // 若不是正确的返回code，且已经响应，就抛出错误
        // const err = new Error(data.msg)

        // err.data = data
        // err.response = response
        console.log(response);
        
        // throw err    
        return data
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break

                case 401:
                    err.message = '未授权，请登录'
                    break

                case 403:
                    err.message = '拒绝访问'
                    break

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = '服务器内部错误'
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break

                default:
            }
        }
        return Promise.reject(err)
    }
)



