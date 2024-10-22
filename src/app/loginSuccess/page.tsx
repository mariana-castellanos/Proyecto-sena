"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Capturar los parámetros de la URL
    const query = new URLSearchParams(window.location.search);
    const user = query.get("user");

    if (user) {
      const parsedUser = JSON.parse(decodeURIComponent(user));
      const firstName = parsedUser.nombre.split(" ")[0];
      const userData = {
        ...parsedUser,
        name: firstName, // Agregar la nueva llave 'name' con el valor del primer nombre
      };
      // Guardar los datos del usuario en localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirigir según el rol del usuario
      const userRole = userData.rol;

      if (userRole === "administrador") {
        router.push("/admin");
      } else if (userRole === "domiciliario") {
        router.push("/domiciliario");
      } else if (userRole === "cliente") {
        router.push("/");
      } else {
        router.push("/"); // Redirigir a una página predeterminada si no se reconoce el rol
      }
    }
  }, [router]);

  return <p>Redirigiendo...</p>; // Mensaje temporal mientras se realiza la redirección
}
