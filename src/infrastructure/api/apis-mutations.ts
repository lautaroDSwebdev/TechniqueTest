import { useMutation, useQuery , useQueryClient} from "@tanstack/react-query"
import { getComents, postComents } from "@/core/use-cases/coments-use-cases"
import { CommentsType } from "@/core/interfaces/coments"


export const apisMutation = () => {

    const IQ = useQueryClient()
    const getComentsQuery = useQuery({
        queryKey: ["coments"],
        queryFn: getComents
    })

    const postComentsMutation = useMutation({
        mutationKey: ["coments"],
        mutationFn:(data: CommentsType) => {
            return postComents(data)
        }, 
        onSuccess: () => {
            console.log("Succes Post")
            IQ.invalidateQueries({
                queryKey: ["coments"]
            })
            
        }

    })


    return { getComentsQuery, postComentsMutation }
}