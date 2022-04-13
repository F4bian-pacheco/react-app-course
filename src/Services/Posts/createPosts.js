import axios from "axios";

export const createPosts = ({tittle, body, userId}) => {

    return Promise.reject("Algo malo ha pasado")

    return axios
        .post("https://jsonplaceholder.typicode.com/posts",{tittle, body, userId})
        .then((response) => {
            const {data} = response
            return data
        })
}