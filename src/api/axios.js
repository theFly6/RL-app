// 对axios进行二次封装
import axios from 'axios'
// 引入加载动画
import { Loading } from 'element-ui'

// 定义加载变量
let loading
// 开始加载
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中~',
        background: 'rgba(0,0,0,0.7)'
    })
}
// 结束加载
function endLoading() {
    loading.close()
}

// 创建axios实例
const requestsA = axios.create({
    baseURL: '/api',
    timeout: 20000
})
const requestsB = axios.create({
    baseURL: '/arg',
    timeout: 20000
})
const requestsC = axios.create({
    baseURL: '/lida',
    timeout: 20000
})

// 请求拦截器
requestsA.interceptors.request.use(config => {
    startLoading()
    return config
})

// 响应拦截器
requestsA.interceptors.response.use(
    res => {
        endLoading()
        return res
    },
    err => {
        endLoading()
        return Promise.reject(new Error(err))
    }
)
// 请求拦截器
requestsB.interceptors.request.use(config => {
    startLoading()
    return config
})

// 响应拦截器
requestsB.interceptors.response.use(
    res => {
        endLoading()
        return res
    },
    err => {
        endLoading()
        return Promise.reject(new Error(err))
    }
)
// 请求拦截器
requestsC.interceptors.request.use(config => {
    startLoading()
    return config
})

// 响应拦截器
requestsC.interceptors.response.use(
    res => {
        endLoading()
        return res
    },
    err => {
        endLoading()
        return Promise.reject(new Error(err))
    }
)

// export default requestsA
export { requestsA, requestsB,requestsC };