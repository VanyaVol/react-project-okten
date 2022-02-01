import {axiosServicesJsonPlaceholder} from "./axios.services";
import {urlsJsonPlaceholder} from "../configs/urls.jsonplaceholder";

export const commentsServices = {
    getAll: () => axiosServicesJsonPlaceholder.get(urlsJsonPlaceholder.comments).then(value => value.data)
}
