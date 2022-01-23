import axios from "axios";

import baseURL from "../configs/urls";

export const axiosServices = axios.create({
    baseURL: baseURL,
    params: {
        token: '1856.HLfTgipWJzVHisMYbLvSvigPoeKwADUn',
        height: '500',
        width: '300'
    }
})