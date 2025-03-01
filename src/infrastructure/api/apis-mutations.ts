import { useMutation, useQuery } from "@tanstack/react-query"
import { getComents, postComents } from "@/core/use-cases/coments-use-cases"
import { Coments } from "@/core/interfaces/coments"


export const apisMutation = () => {
    const getComentsQuery = useQuery({
        queryKey: ["coments"],
        queryFn: getComents
    })

    const postComentsMutation = useMutation({
        mutationKey: ["coments"],
        mutationFn:(data: Coments) => {
            return postComents(data)
        } 
    })


    return { getComentsQuery, postComentsMutation }
}