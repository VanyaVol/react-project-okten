import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";


export const characterServices = {
    getAll: () => axiosServices.get(urls.episode).then(value => value.data),
    getByPage: (page)=> axiosServices.get(`${urls.character}`,{params: {page: page}}).then(value => value.data)
}