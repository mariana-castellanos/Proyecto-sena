"use client";
import { useState } from "react";

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
        alert("Contraseña actualizada con éxito");
        window.location.href = "/login";
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
