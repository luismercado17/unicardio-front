'use client'
import { useAuthContext } from "@/auth";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function ContentLayout({ children }: { children: React.ReactNode }) {
    const { logout } = useAuthContext()
    return (
        <div>
            <header>
                <div>
                    <div/>
                    <a href='#'>
                        <img style={{maxWidth: 200, width: 300, height: 100, objectFit: 'cover'}} src='/img/logo.png'/>
                    </a>
                    <a style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10}} type="link" onClick={() => {
                        logout();
                    }}>
                        Cerrar sesión
                        <img style={{transform: 'rotate(180deg)'}} src="/img/logout.svg" width={20}/>
                    </a>
                </div>
            </header>
            <div>{children}</div>
        </div>
    )
  }