import { authenticationService } from "@/api"
import { useAuthContext } from "@/auth"
import { useRouter } from "next/navigation"

const useLogin = () => {
    const router = useRouter()
    const {login} = useAuthContext()
  
    const handleLogin = async (payload: any) => {
      const data = {
        ...payload,
        email: payload.dni,
        strategy: "local"
      }
        await authenticationService.login(data).then((res) => {
          login(res.user, res.accessToken)
        }).catch((err) => {
          console.log(err)
        })
    }

  return { handleLogin }
}

export default useLogin
