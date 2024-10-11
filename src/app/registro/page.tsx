import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import { Registro } from "../../components/auth/registro";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Registro />
      <Footer />
    </div>
  );
}

export default page;
