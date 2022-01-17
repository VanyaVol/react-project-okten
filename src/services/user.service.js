import axios from "axios";
import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";


const userServices = {
    getAll: () => {
        return axiosService.get(urls.users).then(value => value.data);
    }
}

export {userServices};