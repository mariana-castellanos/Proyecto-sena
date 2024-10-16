"use client";
import { useState } from "react";
import { loginService } from "@/lib/authService"; // Importa el servicio de autenticación
import { useRouter, useSearchParams } from "next/navigation";
import { serialize } from "v8";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const redirect = searchParams.get("redirect");

    try {
      const response = await loginService(email, password);
      const data = await response.json();

      if (response.ok) {
        console.log("Login exitoso", data);
        setUser(data.userData);
        localStorage.setItem("user", JSON.stringify(data.userData));

        if (redirect){
            router.push(String(redirect))
        } else {
            router.push("/")
        }
        
      } else {
        console.error("Error en el login:", data.message);
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión", error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
}