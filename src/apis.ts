import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const client = axios.create({ baseURL: BASE_URL });
