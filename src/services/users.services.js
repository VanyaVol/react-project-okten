import {urls} from "../config/urls";

const getAll = () => {
    return fetch(urls.users).then(value => value.json())
}

const users = {
    getAll
}

export {users};
