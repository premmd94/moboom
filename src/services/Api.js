import { createContext } from "react";

export const baseUrl = "https://dummyjson.com/";
const ApiCallFun = async (url, method, body) => {
    try {
        const option = {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
        const res = await fetch(baseUrl + url, option);
        const response = await res.json();
        return response;
    } catch (err) {
        return err
    }
}

export const ApiCall = ApiCallFun;
export const ProductContext = createContext();