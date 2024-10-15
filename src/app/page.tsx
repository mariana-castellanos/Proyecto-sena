"use client";
import { Footer } from "@/components/component/footer";
import { Main } from "@/components/component/main";
import { Navbar } from "@/components/component/navbar";
import { CartProvider } from "@/context/CartContext";
import React, { useEffect, useState } from "react";

function page() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default page;
