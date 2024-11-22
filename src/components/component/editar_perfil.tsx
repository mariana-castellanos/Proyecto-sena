"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";

export function Editar_perfil() {
  const [user, setUser] = useState({
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
        const userData = JSON.parse(localStorage.getItem("user") || "{}");
        const response = await fetch(
          `http://localhost:8080/api/v1/usuario/usuario/${userData.id_usuario}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      const response = await fetch(
        `http://localhost:8080/api/v1/usuario/update/${userData.id_usuario}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const data = await response.json(); // Extraer los datos JSON

        Swal.fire({
          title: "Actualización correcta",
          text: "Datos actualizados correctamente",
          icon: "info",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
          position: "center", // Se muestra en el centro
        }).then((result) => {
          // Redirige solo después de que el usuario presione "Aceptar"
          window.location.href = "/perfil"; // Cambia '/login' a la ruta a la que quieras redirigir
        });

        // Actualizar el localStorage
        const { id, ...rest } = data.user; // Extrae 'id' y guarda el resto de las propiedades
        const updatedUser = { id_usuario: id, ...rest }; // Reconstruye el objeto con 'id_usuario'

        // Actualizar el localStorage

        localStorage.setItem("user", JSON.stringify(updatedUser));
      } else {
        Swal.fire({
          title: "Error en actualización",
          text: "Error al actualizar los datos",
          icon: "info",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
          position: "center", // Se muestra en el centro
        });
      }
    } catch (error) {
      console.error("Error actualizando datos del usuario:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-[#0077b6] mb-4">
          Editar Perfil
        </h1>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              value={user.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <Input
              id="apellido"
              name="apellido"
              type="text"
              value={user.apellido}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="cel"
              className="block text-sm font-medium text-gray-700"
            >
              Celular
            </label>
            <Input
              id="cel"
              name="cel"
              type="text"
              value={user.cel}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-700"
            >
              Correo
            </label>
            <Input
              id="correo"
              name="correo"
              type="email"
              value={user.correo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="doc"
              className="block text-sm font-medium text-gray-700"
            >
              Documento
            </label>
            <Input
              id="doc"
              name="doc"
              type="text"
              value={user.doc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección
            </label>
            <Input
              id="direccion"
              name="direccion"
              type="text"
              value={user.direccion}
              onChange={handleChange}
            />
          </div>
        </form>
        <Button
          className="mt-4 w-full bg-[#0077b6] text-white hover:bg-[#005a8f]"
          onClick={handleSave}
        >
          Guardar Cambios
        </Button>
      </div>
    </div>
  );
}
