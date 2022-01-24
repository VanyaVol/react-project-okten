import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";


export const characterServices = {
    getAll: () => axiosServices.get(urls.episode).then(value => value.data)
}