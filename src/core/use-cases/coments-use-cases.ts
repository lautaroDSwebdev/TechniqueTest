import axios from "axios";
import { CommentsType } from "../interfaces/coments";

const api = axios.create({
    baseURL: "http://localhost:5000/"
    // baseURL: "https://jsonplaceholder.typicode.com/"
})

export const getComents = async () => {
    const req = await api.get<CommentsType[] >("comments")
    return req.data
}
export const postComents = async (data: CommentsType) => {
    const req = await api.post("comments/", data)
    return req.data
}