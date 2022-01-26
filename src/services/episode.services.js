import {axiosServices} from './axios.services';
import {urls} from '../configs/urls';

export const episodeServices = {
    getAll: () => axiosServices.get(urls.episode).then(value => value.data),
    getByPage: (page) => axiosServices.get(urls.episode, {params: {page: page}}).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.episode}/${id}`).then(value => value.data)
}