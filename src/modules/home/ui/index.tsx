'use client'
import { useAuthContext } from "@/auth"
import useResult from "../lib/useResult"
import moment from "moment"
import { s3UploaderService } from "@/api"
import { useRouter } from "next/navigation"

export default function HomeModule() {
    const { user, logout } = useAuthContext()
    const {results} = useResult(user?.id)
    const router = useRouter()

    const handleClick = async (key: any) => {
        await s3UploaderService.find({query: {key}}).then((res: any) => {
            window.open(res?.presignedUrl)
        })
    }
  return ( 
    <>
    <div className="banner">
        <img width='100%' src="/img/Mision-Presentacion-Mobile-First-1.jpg"/>
        <div className="contenidoBanner">
            <h1 style={{textAlign: 'center', marginBottom: 10}}>Hola, {user?.first_name} {user?.last_name}</h1>
            <h2 style={{textAlign: 'center', marginBottom: 20}}>Resultado de Exámenes</h2>
        </div>
    </div>
    <div className="home_content">
        <main>
        {results.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Descargar</th>
                </tr>
            </thead>
            <tbody>
                {results?.map((it) => (
                    <tr key={it?.id}>
                        <td>{moment(it?.date).format('LL')}</td>
                        <td>{it?.description}</td>
                        <td><a style={{cursor: 'pointer'}} onClick={() => handleClick(it.file_path)}>Descargar</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
        ) : (
            <div className="no_product">
                <p style={{color: 'black'}}>:( Aun no tienes resultados</p>
            </div>
        )}
        </main>
    </div>
    </>
  )
}
