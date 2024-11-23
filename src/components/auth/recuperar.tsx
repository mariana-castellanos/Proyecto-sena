"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export function Recuperar() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://backend-dzyq.onrender.com/api/v1/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Revisa tu inbox",
          text: "Se ha enviado un correo para restablecer tu contraseña.",
          icon: "info",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
          position: "center", // Se muestra en el centro
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "http://localhost:3000/main";
          }
        });
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: "Error al intentar enviar el correo.",
          icon: "info",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
          position: "center", // Se muestra en el centro
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Recuperar Contraseña</h2>
      <input
        type="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Enviar correo de recuperación</button>
    </form>
  );
}
