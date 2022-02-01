import {axiosServicesJsonPlaceholder} from "./axios.services";
import {urlsJsonPlaceholder} from "../configs/urls.jsonplaceholder";

export const usersService = {
    getAll: () => axiosServicesJsonPlaceholder.get(urlsJsonPlaceholder.users).then(value => value.data)
}