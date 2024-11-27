"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ResetPassword({ token }: { token: string }) {
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            password: newPassword,
          }),
        }
      );

      if (response.ok) {
        console.log("Contraseña actualizada con éxito");

        Swal.fire({
          title: "Actualización correcta",
          text: "Contraseña actualizada con éxito",
          icon: "info",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
          position: "center", // Se muestra en el centro
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        });
      } else {
        console.error("Error al actualizar la contraseña");
      }
    } catch (error) {
      console.error("Error en la solicitud", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Restablecer contraseña</h2>
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button type="submit">Restablecer contraseña</button>
    </form>
  );
}
