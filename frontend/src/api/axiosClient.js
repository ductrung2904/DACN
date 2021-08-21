import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:5000/book",
    headers: {
        'content-type': 'application/json',
    },
});

// axiosClient.interceptors.request.use((response) => {
//     if (response && response.data) {
//         return response.data;
//     }

//     return response;
// }, (error) => {
//     throw error;
// });

export default axiosClient;