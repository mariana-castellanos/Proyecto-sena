import { Carrito } from "@/components/component/carrito";
import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import React from "react";

function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Carrito />
      </div>

      <Footer />
    </div>
  );
}

export default page;
