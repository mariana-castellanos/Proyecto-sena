import { useState } from "react";
import { registerService } from "@/lib/authService";

export function useRegister() {
    const [nombre, setNombre] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [cel, setCel] = useState("");


    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const response = await registerService(nombre, email, password, lastName, address, cel);
            console.log("Registro exitoso", response);
            window.location.href = "/login";
        }catch (error){
            console.error("Error en el registro:", error);
        }
    };
    
  return {
    nombre,
    setNombre,
    email,
    setEmail,
    password,
    setPassword,
    lastName,
    setLastName,
    address,
    setAddress,
    cel,
    setCel,
    handleRegister,
  };
}