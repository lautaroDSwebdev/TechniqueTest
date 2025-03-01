import axios from "axios";
import { ComentsType } from "../interfaces/coments";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const getComents = async () => {
    const req = await api.get<ComentsType[]>("comments")
    return req.data
}
export const postComents = async (data: ComentsType) => {
    const req = await api.post("comments", data)
    return req.data
}