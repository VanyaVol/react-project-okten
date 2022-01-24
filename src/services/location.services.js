import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";


export const locationServices = {
    getAll: () => axiosServices.get(urls.location).then(value => value.data)
}