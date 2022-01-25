import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";


export const characterServices = {
    getAll: () => axiosServices.get(urls.episode).then(value => value.data),
    getById: (id)=> axiosServices.get(`${urls.character}/${id}`).then(value => value.data)
}