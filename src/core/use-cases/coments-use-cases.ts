import axios from "axios";
import { Coments } from "../interfaces/coments";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const getComents = async () => {
    const req = await api.get<Coments[]>("comments")
    return req.data
}
export const postComents = async (data: Coments) => {
    const req = await api.post("comments", data)
    return req.data
}