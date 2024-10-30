"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider> {children}</CartProvider>
        <ToastContainer
          position="top-center" // Para centrar la notificación
          autoClose={false} // No se cierra automáticamente
          // No se cierra al hacer clic en ella
          draggable={false} // No es arrastrable
          hideProgressBar={true} // Sin barra de progreso
        />
      </body>
    </html>
  );
}
