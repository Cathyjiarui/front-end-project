import axios from 'axios'

const service = axios.create({
    //url = base url + request url
    baseURL: "http://api.cathyjiarui.com/",
    //配置请求超时时间
    timeout: 5000
})

export default service