import axios from "axios";

export const api = axios.create({
    baseURL: 'https://3f4p9z9juc.execute-api.us-east-1.amazonaws.com/'
})