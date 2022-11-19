import axios from "axios";

const endPoint = "https://jsonplaceholder.typicode.com"

export const getPostsAPI = async () => {
    const url = `${endPoint}/posts`;
    const response = await axios.get(url);
    return response;
}

export const postAPI = async (obj: any) => {
    const url = `${endPoint}/posts`;
    const response = await axios.post(url, obj);
    return response;
}

export const patchAPI = async (obj: any) => {
    const url = `${endPoint}/posts/${obj.id}`;
    const response = await axios.patch(url, obj);
    return response;
}

export const deletePostAPI = async (id: number) => {
    const url = `${endPoint}/posts/${id}`;
    const response = await axios.delete(url);
    return response;
}