import { useQuery } from "@tanstack/react-query"
import { coins } from "../api"

export const useAllCoins = (params) => {
    return useQuery({
        queryKey: ['coins', params],
        queryFn: () => coins.getAll(params),
        select: data => data.data
    })
}