import { useState } from "react";
import { loginService } from "@/lib/authService"; // Importa el servicio de autenticación

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginService(email, password);
      const data = await response.json();
      if (response.status ===200) {
        console.log("Login exitoso", data);
        setUser(data.userData);
        localStorage.setItem("user", JSON.stringify(data.userData));
        window.location.href = "/";
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