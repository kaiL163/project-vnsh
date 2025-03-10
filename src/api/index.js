import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/",
    headers: {
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY
    }
})

export const coins = {
    getAll(params) {
        return instance.get('coins/markets?vs_currency=usd', {params})
    }
}