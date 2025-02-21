import { resultsService } from "@/api"
import IResults from "@/types/IResults"
import { useEffect, useState } from "react"

const useResult = (id:number) => {
    const [results, setResults] = useState<IResults[]>([])

    const handleResults = async (id: number) => {
        await resultsService.find({query: {user_id: id, $sort: {id: -1}} }).then((res) => {
          setResults(res?.data)
          }).catch((err) => {
            console.log(err)
          })
    }

    useEffect(() => {
      if (id){
        handleResults(id)
      }
    }, [id])

return { results }
}

export default useResult