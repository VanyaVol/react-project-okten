import {urls} from "../config/urls";

const getPostUser = (id) => {
    return fetch(`${urls.users}/${id}/posts`).then(value => value.json())
}

const posts = {
    getPostUser
}

export {posts};
