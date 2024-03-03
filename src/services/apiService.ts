import axios from "axios";

import {baseURL} from "../constants";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
        request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDg4NmY3YTFjYWZhNWE5YjFiNmM3NGRmZjBiZWVmYiIsInN1YiI6IjY1ZGNiZjY2NDUzOWQwMDE4NmMwM2FlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L03ZeSSCWfOSLxLIwmNHNkeKMYpQ7VVEVbKZgVBskIo'
        return request
    }
)

export {
    apiService
}