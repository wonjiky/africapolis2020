import axios from 'axios';

let URL = '/';

export const importConfig = axios.create({
    baseURL: URL + 'json/config/'
});
