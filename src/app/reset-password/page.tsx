"use client";
import { Footer } from "@/components/component/footer";
import ResetPassword from "../../components/auth/resetPassword";
import { Navbar } from "@/components/component/navbar";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // Obtener el valor de 'token' de los parámetros de búsqueda

  return (
    <div>
      <Navbar />
      {token ? <ResetPassword token={token} /> : <p>Cargando...</p>}
      <Footer />
    </div>
  );
}
