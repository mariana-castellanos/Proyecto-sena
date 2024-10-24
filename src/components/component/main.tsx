"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

interface Product {
  id_producto: number;
  nombre_producto: string;
  marca_producto: string;
  precio_producto: string;
  id_proveedor: number;
  cantidad: number;
}

interface MainProps {
  products: Product[];
}

const PapeleriaSection = ({ products }: MainProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8 md:text-3xl">Papelería y Regalos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`${product.nombre_producto}.jpg`}
                  alt={product.nombre_producto}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {product.nombre_producto}
                  </h3>
                  <p className="text-gray-600">{`Marca: ${product.marca_producto}`}</p>
                  <p className="text-gray-800 font-bold">{`${product.precio_producto} COP`}</p>
                  <Button size="sm" onClick={() => handleAddToCart(product)}>
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export function Main() {
  // Estado para almacenar los productos obtenidos del backend
  const [productos, setProductos] = useState<Product[]>([]);

  // Hacer la llamada al backend cuando el componente se monta
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/inventario")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <div className="w-full">
      {/* First Carousel */}
      <div className="relative overflow-hidden">
        <Carousel
          className="w-full max-w-5xl mx-auto mt-8"
          opts={{ loop: true }}
        >
          <CarouselContent>
            <CarouselItem>
              <img
                src="descuento 1.png"
                alt="Featured Product"
                width={1000}
                height={400}
                className="object-contain w-full h-[400px]"
                style={{ aspectRatio: "1000/400", objectFit: "contain" }}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="descuento 2.png"
                alt="Featured Product"
                width={1000}
                height={400}
                className="object-contain w-full h-[400px]"
                style={{ aspectRatio: "1000/400", objectFit: "contain" }}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="descuento 3.png"
                alt="Featured Product"
                width={1000}
                height={400}
                className="object-contain w-full h-[400px]"
                style={{ aspectRatio: "1000/400", objectFit: "contain" }}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Papelería Section */}
      <PapeleriaSection products={productos} />

      {/* Second Carousel */}
      <div className="relative overflow-hidden pb-8">
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {["carrusel4.webp", "carrusel2.webp", "carrusel3.webp"].map(
              (src, index) => (
                <CarouselItem key={index}>
                  <img
                    src={src}
                    alt="Featured Product"
                    width={1200}
                    height={300}
                    className="object-contain w-full h-[300px]"
                    style={{ aspectRatio: "1200/300", objectFit: "contain" }}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
