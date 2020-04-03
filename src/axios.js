import axios from 'axios';

// let URL = '/';
let URL = 'https://wonjiky.github.io/africapolis2020/'

export const mainInstance = axios.create({
    baseURL: URL + 'json/config/'
});

export const i18Instance = axios.create({
    baseURL: URL + 'json/i18n/'
});