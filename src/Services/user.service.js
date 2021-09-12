import axios from 'axios';

const API_URL = "http://localhost:4200/auth/";

const getLoginData = (myData) => {
    return axios.post(API_URL+"login", myData);
}

const signupData = (myData) => {
    return axios.post(API_URL+"signup", myData);
}

const postResetData = (myData) => {
    return axios.post(API_URL+"reset", myData);
}

const postResetForm = (myData) => {
    return axios.post(API_URL+"resetform", myData)
}

const postUrlShortner = (myData) => {
    console.log("In user.service page",myData);
    return axios.post(API_URL+"shorturl", myData)
}

const getURLData = () => {
    return axios.get(API_URL+"geturl");
}

export { getLoginData, signupData, postResetData, postResetForm, postUrlShortner, getURLData };