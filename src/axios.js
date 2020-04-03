import axios from 'axios';

// let URL = '/';
let URL = 'www.africapolis.org/new/'

export const mainInstance = axios.create({
    baseURL: URL
});

export const i18Instance = axios.create({
    baseURL: URL
});