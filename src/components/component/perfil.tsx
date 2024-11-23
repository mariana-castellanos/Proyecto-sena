"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Perfil() {
  const [user, setUser] = useState({
    id_usuario: -1,
    nombre: "",
    apellido: "",
    cel: "",
    correo: "",
    doc: "",
    direccion: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = localStorage.getItem("user"); // Obtén el valor de localStorage
        if (userData) {
          const user_object = JSON.parse(userData); // Parsea el JSON a un objeto
          console.log("ID del usuario:", user_object.id_usuario); // Accede a id_usuario

          const response = await fetch(
            `https://backend-dzyq.onrender.com/api/v1/usuario/usuario/${user_object.id_usuario}`
          );
          const data = await response.json();
          setUser(data);
        } else {
          console.error("No se encontró el usuario en localStorage");
        }
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-blue-600 mb-4">
          Perfil de Usuario
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <p>
            <strong>Nombre:</strong> {user.nombre || "No disponible"}
          </p>
          <p>
            <strong>Apellido:</strong> {user.apellido || "No disponible"}
          </p>
          <p>
            <strong>Celular:</strong> {user.cel || "No disponible"}
          </p>
          <p>
            <strong>Correo:</strong> {user.correo || "No disponible"}
          </p>
          <p>
            <strong>Documento:</strong> {user.doc || "No disponible"}
          </p>
          <p>
            <strong>Dirección:</strong> {user.direccion || "No disponible"}
          </p>
        </div>
        <Button
          className="mt-4 w-full bg-[#0077b6] text-white hover:bg-[#005a8f]"
          onClick={() => (window.location.href = "/perfil/editar")}
        >
          Actualizar Datos
        </Button>
      </div>
    </div>
  );
}
