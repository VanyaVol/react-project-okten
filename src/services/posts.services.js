import {axiosServicesJsonPlaceholder} from "./axios.services";
import {urlsJsonPlaceholder} from "../configs/urls.jsonplaceholder";

export const postsServices = {
    getAll: () => axiosServicesJsonPlaceholder.get(urlsJsonPlaceholder.posts).then(value => value.data)
}