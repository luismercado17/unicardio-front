"use client"
import { usePathname, useRouter } from 'next/navigation'
import { createContext, FC, useContext, useEffect, useState } from 'react'
import { IAuthContext } from './types'
import { authenticationService } from '@/api'
import { feathersStorage } from '@/api/client.config'
import { TOKEN_NAME } from '../../environment'
import IUser from '@/types/IUser'

const PUBLIC_URLS = ['/login']

interface AuthProviderProps {
    children: React.ReactNode; // Define 'children' prop explicitly
  }

export const AuthContext = createContext<IAuthContext>({
    isAuth: false,
    user: null,
    login: () => undefined,
    logout: () => undefined,
})

export const useAuthContext = () => useContext(AuthContext)


const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const pathname = usePathname()

    const redirectTo = (type: "auth" | "next") => {
        const currentPath = pathname!.split("?")?.[0] || "";
        const params = pathname!.split("?")[1] || "";
    
        const searchParams = new URLSearchParams(params);
    
        if (type === "auth") {
          if (currentPath !== "/login") {
            searchParams.set("_nextUrl", encodeURIComponent(currentPath));
            
            router.push("/login");
          }
        } else {
          const nextUrl = searchParams.get("_nextUrl");
    
          if (nextUrl) {
            router.push(decodeURIComponent(nextUrl));
          } else {
            router.push(currentPath !== "/login" ? currentPath : "/");
          }
        }
    };

    const login = (authUser: IUser, token: string) => {
        setIsAuth(true);
        setUser(authUser);
    
        localStorage.setItem(TOKEN_NAME(), token);
        redirectTo("next");
    };
    
    const logout = () => {
        console.log("11")
        localStorage.removeItem(TOKEN_NAME());
        setIsAuth(false);
        setUser(null);
        router.push("https://main.d2yufm59thfa1b.amplifyapp.com/login");
    };
    
    const authFromToken = () => {
        setLoading(true);
        const token = localStorage.getItem(TOKEN_NAME());
        if (!token) {
          redirectTo("auth");
          setLoading(false);
        } else {
          authenticationService
            .retryLogin()
            .then((res) => {
              if (!res) {
                redirectTo("auth");
              } else {
                setIsAuth(true);
                setUser(res.user);
                redirectTo("next");
              }
            })
            .catch(() => {
              redirectTo("auth");
            })
            .finally(() => {
              setLoading(false);
            });
        }
      };

    useEffect(() => {
        authFromToken();
    }, [])

    return (

        <AuthContext.Provider
            value={{
                isAuth,
                user,
                login,
                logout,
            }}
        >
            {loading && <p>Cargando...</p>}
            {!loading && (isAuth || pathname === "/login") && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
