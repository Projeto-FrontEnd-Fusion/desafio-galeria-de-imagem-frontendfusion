import { api } from "../libs/axios";


export async function getPhotos() {
  const response = await api.get('/list')
  return response.data
}