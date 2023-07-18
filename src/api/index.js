import axios from "axios";

const instance = axios.create({
    baseURL: 'http://book.admin.com/api/v1/',
});

export default instance;