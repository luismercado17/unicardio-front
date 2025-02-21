'use client'
import Input from "@/common/Input";
import { useForm } from "react-hook-form";
import useLogin from "../lib/useLogin";

export default function LoginForm() {
    const { register, handleSubmit, control } = useForm();
    const {handleLogin} = useLogin()
  return (
    <form onSubmit={handleSubmit(handleLogin)} style={{flexDirection: 'column'}}>
        <img src="/img/logo.png" style={{ width: '100%', maxWidth: 300, height: 120, objectFit: 'cover'}}/>
        <h2 style={{display: 'block', marginBottom: 40, color: 'black'}}>Inicia Sesión</h2>
        <Input name="dni" control={control} placeholder="Documento de identidad" />
        <Input password={true} name="password" control={control} placeholder="Ingresa tu contraseña" />
        <button type="submit">Ingresar</button>
    </form>
  )
}
