"use client";
import { useState } from "react";
import { loginService } from "@/lib/authService"; // Importa el servicio de autenticación
import { useRouter, useSearchParams } from "next/navigation";
import { serialize } from "v8";
import Swal from "sweetalert2";

const GOOGLE_AUTH_URL = "http://localhost:8080/api/v1/auth/google"; // Ruta para el login con Google

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

        const userRole = data.userData.role;

        if (redirect){
            router.push(String(redirect))
        } else if  (userRole === "administrador") {
            router.push("/admin");
          } else if (userRole === "domiciliario") {
            router.push("/pedidos");
          } else if (userRole === "cliente") {
            router.push("/"); 
          } else {
            router.push("/"); 
          } 
        
      } else {
        console.error("Error en el login:", data.message);
        Swal.fire({
          title: "Datos incorrectos",
          text: "El correo o la contraseña que ingresaste son incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
          position: "center", // Se muestra en el centro
        }).then((result) => {
          // Redirige solo después de que el usuario presione "Aceptar"
          window.location.href = "/login"; // Cambia '/login' a la ruta a la que quieras redirigir
        });
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/api/v1/auth/google";
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleGoogleLogin,
  };
}