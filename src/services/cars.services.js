import {axiosService} from "./axios.services";
import {urls} from "../configs/urls";

const carsServices = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateCar: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}

export {carsServices};