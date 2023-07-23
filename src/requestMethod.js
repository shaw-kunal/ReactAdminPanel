import axios from "axios";
const BASE_URL = "http://localhost:6000/api/";
const Token = localStorage.getItem("accessTokenAdmin");
console.log(Token);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `kk ${Token}` }

})