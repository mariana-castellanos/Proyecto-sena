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

const PapeleriaSection = () => {
  // Estado para almacenar los productos obtenidos del backend
  const [productos, setProductos] = useState([]);

  // Hacer la llamada al backend cuando el componente se monta
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/inventario")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]") || [];

    setCartCount(cartItems.length); // Actualizamos el número de productos en el carrito
  }, []);

  const handleAddToCart = (product) => {
    // Obtenemos los productos ya existentes en el carrito
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]") || [];
    // Añadimos el nuevo producto
    cartItems.push(product);
    // Guardamos de nuevo en localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCart(cartItems);
    // Actualizamos el contador del carrito
    setCartCount(cartItems.length);
    console.log("se agregó, el total es: " + cartCount);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8 md:text-3xl">Papelería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.length > 0 ? (
            productos.map((product, index) => (
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
      <PapeleriaSection />

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

      {/* Regalos Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 md:text-3xl">Regalos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                src: "Desayuno romántico.jpg",
                title: "Desayuno romántico",
                description: "Deliciosos desayunos ideales para sorprender.",
                price: "$65.000",
              },
              {
                src: "Cesta de Chocolates.jpg",
                title: "Ancheta de chocolates",
                description:
                  "Ancheta con diferentes tipos y más deliciosos chocolates.",
                price: "$70.000",
              },
              {
                src: "Peluche.jpg",
                title: "Peluches",
                description: "Hermosos peluches.",
                price: "$50.000",
              },
              {
                src: "Papel de Envoltura.jpg",
                title: "Papel regalo",
                description:
                  "Papel regalo, diferentes diseños para él y para ella.",
                price: "$2.000",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.src}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-contain"
                  style={{ aspectRatio: "400/300", objectFit: "contain" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium">
                      {product.price}
                    </span>
                    <Button size="sm">Agregar al carrito</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/regalos">
            <div className="flex justify-center mt-8">
              <Button variant="outline">Ver más</Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Third Carousel */}
      <div className="relative overflow-hidden p-6">
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {["regalos1.jpg", "regalos2.jpg", "regalos3.jpg"].map(
              (src, index) => (
                <CarouselItem key={index}>
                  <img
                    src={src}
                    alt="Featured Product"
                    width={1200}
                    height={300}
                    className="object-cover w-full h-[300px]"
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
