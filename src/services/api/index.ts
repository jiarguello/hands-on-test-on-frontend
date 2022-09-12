import axios from "axios";

// console.debug(publicRuntimeConfig);

const apiRequest = axios.create({
    baseURL: "http:localhost:4040",
});

export default apiRequest;
