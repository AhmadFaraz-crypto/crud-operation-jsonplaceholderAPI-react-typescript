import axios from "axios";

// interfaces
import { PostPayload } from '../Interface/index';

const endPoint = "https://jsonplaceholder.typicode.com"

export const getPostsAPI = async () => {
    const url = `${endPoint}/posts`;
    const response = await axios.get(url);
    return response;
}

export const postAPI = async (payload: PostPayload) => {
    const url = `${endPoint}/posts`;
    const response = await axios.post(url, payload);
    return response;
}

export const putAPI = async (payload: PostPayload) => {
    const url = `${endPoint}/posts/${payload.id}`;
    const response = await axios.put(url, payload);
    return response;
}

export const deletePostAPI = async (id: number) => {
    const url = `${endPoint}/posts/${id}`;
    const response = await axios.delete(url);
    return response;
}