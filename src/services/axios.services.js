import axios from 'axios';
import baseURL from "../configs/urls";
import baseUrlJsonPlaceholder from "../configs/urls.jsonplaceholder";

const axiosServices = axios.create({
    baseURL
});

export {axiosServices}

const axiosServicesJsonPlaceholder = axios.create({
    baseURL: baseUrlJsonPlaceholder
});

export {axiosServicesJsonPlaceholder};