import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import { Editar_perfil } from "@/components/component/editar_perfil";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Editar_perfil />
      <Footer />
    </div>
  );
}

export default page;
