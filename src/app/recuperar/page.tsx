import { Footer } from "@/components/component/footer";
import { Recuperar } from "../../components/auth/recuperar";
import { Navbar } from "@/components/component/navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Recuperar />
      <Footer />
    </div>
  );
}

export default page;
