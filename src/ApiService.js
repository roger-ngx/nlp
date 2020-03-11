import axios from 'axios';
import 'whatwg-fetch'

axios.defaults.baseURL = 'http://114.199.151.48:5002/api/v1/chatbots';
axios.defaults.headers.common['API_KEY'] = 'defac44447b57f152d14f30cea7a73cb';
axios.defaults.withCredentials = true;

const payload = { 
    question: 'TEXT'
};

export const getDataFromApi = 
    () => axios.get('/chatbot/response', payload)
    .then(res => console.log(res))
    .catch(err => console.log(err));

export const getDataFromApiByFetch = 
    (text='TEXT') => fetch('http://114.199.151.48:5002/api/v1/chatbots/chatbot/response?question=' + text)
    .then(res => res.json())
    .catch(err => console.log(err));