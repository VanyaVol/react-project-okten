import {axiosServices} from "./axios.services";
import {urls} from "../configs/urls";

const carsServices = {
    getAll: () => axiosServices.get(urls.cars).then(value => value.data),
    createCar: (car) => axiosServices.post(urls.cars, car).then(value => value.data),
    updateCar: (id ,car) => axiosServices.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    deleteCar: (id) => axiosServices.delete(`${urls.cars}/${id}`)
}

export {carsServices};