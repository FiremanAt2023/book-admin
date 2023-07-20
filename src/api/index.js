import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://book.admin.com/api/v1/',
    baseURL: 'http://localhost:8080',
});

export default instance;