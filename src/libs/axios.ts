import axios from "axios";

export const api = axios.create({
  baseURL: 'https://picsum.photos/v2',
})

