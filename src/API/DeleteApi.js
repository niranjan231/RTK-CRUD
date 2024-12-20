import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export async function deleteApi() {

    return axios.get(`${BASE_URL}/posts`, {
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    })
}