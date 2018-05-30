import axios from 'axios';

const DevUrl = 'http://192.168.2.79:9090';       // 开发http请求地址
const ProUrl = '';                               // 正式包http请求地址

let url = null;
const errMsg = '请求服务异常';

if (process.env.NODE_ENV === 'development') {
    url = DevUrl;
} else if (process.env.NODE_ENV === 'test') {
    url = DevUrl;
} else if (process.env.NODE_ENV === 'production') {
    url = ProUrl;
}

axios.defaults.baseURL = url;
axios.defaults.withCredentials = false;
axios.defaults.timeout = 3000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const pending = [];
let cancelToken = axios.CancelToken;
const removePending = (config) => {
    for (let p in pending) {
        if (pending[p].url === config.url + '&' + config.method) {
            pending[p].cancelFunc();
            pending.splice(p, 1);
        }
    }
};

axios.interceptors.request.use(config => {
    removePending(config);
    config.cancelToken = new cancelToken((func) => {
        pending.push({url: config.url + '&' + config.method, cancelFunc: func});
    });
    config.headers = {
        ...config.headers
    };
    return config;
});

axios.interceptors.response.use(response => {
    // 在这里你可以判断后台返回数据携带的请求码
    removePending(response.config);
    console.log('response', response);
    const {status, data} = response;
    if (status === 200) {
        return data;
    } else {
        // 非200请求报错
        throw new Error(status, data, errMsg);
    }
});

const http = {};

http.get = function (url, params = {}, config = {}) {
    return axios.get(url, {params}, config);
};

http.post = function (url, params = {}, config = {}) {
    return axios.get(url, {params}, config);
};

export default http;