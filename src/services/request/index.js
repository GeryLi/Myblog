import axios from "axios";
import { BASE_URL, TIME_OUT } from './config'
class LfRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        this.instance.interceptors.response.use(res => res.data, err => err)


    }


    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, methods: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}
export default new LfRequest(BASE_URL, TIME_OUT)