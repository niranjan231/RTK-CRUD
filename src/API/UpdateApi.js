import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export async function updateApi(id , data) {
    return axios.put(`${BASE_URL}/posts/${id}`, {
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    });
}

