import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import { Pedidos } from "@/components/component/pedidos";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Pedidos />
      <Footer />
    </div>
  );
}

export default page;
