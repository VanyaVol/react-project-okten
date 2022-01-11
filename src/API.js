const baseUrl = 'https://jsonplaceholder.typicode.com/';

const getUsers = () => {
    return fetch(baseUrl + 'users')
        .then(response => response.json())
}

const getPosts = () => {
    return fetch(baseUrl + 'posts')
        .then(response => response.json())
}

const getComments = () => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
}

export {getUsers, getPosts, getComments}