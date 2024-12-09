import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export async function postUserData(data){
    return axios.post(`${BASE_URL}/posts`, data);
}