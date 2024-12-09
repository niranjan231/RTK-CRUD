import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export async function deleteApi(postId) {
    return axios.delete(`${BASE_URL}/posts/${postId}`, {
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    });
}