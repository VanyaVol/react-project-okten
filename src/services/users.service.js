import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

const usersService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostsUserById: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data),
    getAlbumsById: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data),
    getPhotosById: (id) => axiosService.get(`${urls.users}/${id}${urls.photos}`).then(value => value.data)
}

export {usersService};