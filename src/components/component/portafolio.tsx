"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image' // Importación de Image de next/image

// Definición de la interfaz Product para el tipo de los productos
interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export function Portafolio() {
  const giftProducts: Product[] = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Taza de cerámica",
      description: "Taza de cerámica con diseño elegante",
      price: 12.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Caja de regalo",
      description: "Caja de regalo con lazo decorativo",
      price: 19.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Vela aromática",
      description: "Vela aromática con aroma a lavanda",
      price: 14.99,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Portarretratos",
      description: "Portarretratos de madera con diseño moderno",
      price: 9.99,
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Reloj de pulsera",
      description: "Reloj de pulsera con correa de cuero",
      price: 29.99,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Joyero de madera",
      description: "Joyero de madera con compartimentos",
      price: 24.99,
    },
    {
      id: 7,
      image: "/placeholder.svg",
      title: "Florero de vidrio",
      description: "Florero de vidrio con diseño minimalista",
      price: 17.99,
    },
    {
      id: 8,
      image: "/placeholder.svg",
      title: "Cojín decorativo",
      description: "Cojín decorativo con estampado floral",
      price: 14.99,
    },
    {
      id: 9,
      image: "/placeholder.svg",
      title: "Lámpara de mesa",
      description: "Lámpara de mesa con pantalla de tela",
      price: 22.99,
    },
    {
      id: 10,
      image: "/placeholder.svg",
      title: "Juego de tazas",
      description: "Juego de 4 tazas de cerámica",
      price: 16.99,
    },
  ]
  
  const stationeryProducts: Product[] = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Cuaderno de notas",
      description: "Cuaderno de notas con tapa dura",
      price: 7.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Bolígrafo de tinta gel",
      description: "Bolígrafo de tinta gel con punta fina",
      price: 3.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Lápices de colores",
      description: "Caja de lápices de colores con 24 unidades",
      price: 12.99,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Clips decorativos",
      description: "Clips decorativos con diseños divertidos",
      price: 5.99,
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Goma de borrar",
      description: "Goma de borrar con forma de animal",
      price: 2.99,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Marcadores fluorescentes",
      description: "Juego de 6 marcadores fluorescentes",
      price: 8.99,
    },
    {
      id: 7,
      image: "/placeholder.svg",
      title: "Tijeras de oficina",
      description: "Tijeras de oficina con mango ergonómico",
      price: 4.99,
    },
    {
      id: 8,
      image: "/placeholder.svg",
      title: "Cinta adhesiva",
      description: "Cinta adhesiva de oficina, 3 rollos",
      price: 6.99,
    },
    {
      id: 9,
      image: "/placeholder.svg",
      title: "Regla de plástico",
      description: "Regla de plástico de 30 cm",
      price: 2.99,
    },
    {
      id: 10,
      image: "/placeholder.svg",
      title: "Cuaderno espiral",
      description: "Cuaderno espiral de 80 hojas",
      price: 3.99,
    },
  ]

  const [cart, setCart] = useState<Product[]>([])

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product])
  }

  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between p-4 bg-orange-500 md:px-6 lg:px-8">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="mr-4" variant="ghost">
                <div className="h-6 w-6" />
                MENÚ
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Regalos</DropdownMenuItem>
              <DropdownMenuItem>Papelería</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Image
            src="/placeholder.svg"
            alt="Omega Logo"
            width={70}
            height={60}
            style={{ aspectRatio: "70/60", objectFit: "cover" }}
          />
        </div>
        <div className="relative flex items-center w-full max-w-md">
          <Input
            type="search"
            placeholder="Buscar productos..."
            className="w-full rounded-md pl-8 pr-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </header>
      <div className="container mx-auto py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Regalos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {giftProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${product.price}</span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Papelería</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stationeryProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${product.price}</span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
