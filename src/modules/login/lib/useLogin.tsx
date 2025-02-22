import { authenticationService } from "@/api"
import { useAuthContext } from "@/auth"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {
    const router = useRouter()
    const {login} = useAuthContext()
  
    const handleLogin = async (payload: any) => {
      const data = {
        ...payload,
        strategy: "patient"
      }
        await authenticationService.login(data).then((res) => {
          login(res.user, res.accessToken);
          toast.success("Inicio de sesión exitoso 🎉");
      })
      .catch((err) => {
          console.log(err)
          toast.error("Error al iniciar sesión ❌", err?.message);
      });
    }

  return { handleLogin }
}

export default useLogin
