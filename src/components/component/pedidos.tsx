"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { fetchPedidosDomiciliario } from "@/lib/fetchPedidos";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { JSX, SVGProps } from "react";
import "leaflet/dist/leaflet.css";

// Importación dinámica de los componentes de react-leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Importar estilos de Leaflet
import "leaflet/dist/leaflet.css";

interface Pedido {
  id_pedido: number;
  nombre: string;
  telefono: string;
  direccion: string;
  fecha: string;
  estado: string;
}
export function Pedidos() {
  const [pedidosPendientes, setPedidosPendientes] = useState<Pedido[]>([]);
  const [pedidosEntregados, setPedidosEntregados] = useState<Pedido[]>([]);
  const [user, setUser] = useState(null);
  let id_domiciliario = 0;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Solo se ejecuta en el cliente
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      setUser(userData);
      if (userData) {
        id_domiciliario = userData.id_usuario; // Asignamos el id_domiciliario aquí
      }
    }
  }, []);
  // Suponiendo que el domiciliario está logueado

  // Coordenadas de Suba, Bogotá
  const [userLocation, setUserLocation] = useState<[number, number]>([
    4.7411, -74.084,
  ]);

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        function (error) {
          console.error("Error obteniendo la ubicación:", error.message);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (id_domiciliario) {
      const fetchPedidos = async () => {
        const pendientes = await fetchPedidosDomiciliario(
          id_domiciliario,
          "pendiente"
        );
        const entregados = await fetchPedidosDomiciliario(
          id_domiciliario,
          "entregado"
        );
        setPedidosPendientes(pendientes);
        setPedidosEntregados(entregados);
      };
      fetchPedidos();
    }
  }, [id_domiciliario]);

  function marcarComoEntregado(id_pedido: number) {
    fetch(`http://localhost:8080/api/v1/pedidos/update/${id_pedido}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado: "entregado", // Cambiamos el estado a entregado
      }),
    })
      .then((response) => {
        if (response.ok) {
          const pedidoEntregado = pedidosPendientes.find(
            (pedido) => pedido.id_pedido === id_pedido
          );

          if (pedidoEntregado) {
            setPedidosPendientes((prevPendientes) =>
              prevPendientes.filter((pedido) => pedido.id_pedido !== id_pedido)
            );

            setPedidosEntregados((prevEntregados) => [
              ...prevEntregados,
              pedidoEntregado,
            ]);
            alert("Pedido marcado como entregado");
          }
          // Aquí puedes actualizar la lista de pedidos o hacer un nuevo fetch para actualizar
        } else {
          console.error("Error al actualizar el pedido");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud", error);
      });
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f5f5f5]">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6">
        {/* Sección de Pedidos Pendientes */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#0077b6]">
                Pedidos Pendientes
              </CardTitle>
              <CardDescription className="text-[#666666]">
                Estos son los pedidos que aún no han sido entregados.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#0077b6]">Pedido</TableHead>
                    <TableHead className="text-[#0077b6]">Cliente</TableHead>
                    <TableHead className="text-[#0077b6]">Dirección</TableHead>
                    <TableHead className="text-[#0077b6]">Fecha</TableHead>
                    <TableHead className="text-[#0077b6]">Acción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pedidosPendientes.map((pedido: Pedido, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="font-medium text-[#0077b6]">
                          {pedido.id_pedido}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-[#0077b6]">
                          {pedido.nombre}
                        </div>
                        <div className="text-[#666666]">{pedido.telefono}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-[#666666]">{pedido.direccion}</div>
                      </TableCell>
                      <TableCell className="text-[#666666]">
                        {pedido.fecha}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          className="mr-2 bg-[#0077b6] text-white hover:bg-[#005a8f]"
                          onClick={() => marcarComoEntregado(pedido.id_pedido)}
                        >
                          Marcar como Entregado
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Sección de Pedidos Entregados */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#0077b6]">
                Pedidos Entregados
              </CardTitle>
              <CardDescription className="text-[#666666]">
                Estos son los pedidos que ya han sido entregados.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#0077b6]">Pedido</TableHead>
                    <TableHead className="text-[#0077b6]">Cliente</TableHead>
                    <TableHead className="text-[#0077b6]">Dirección</TableHead>
                    <TableHead className="text-[#0077b6]">Fecha</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pedidosEntregados.map((pedido: Pedido, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="font-medium text-[#0077b6]">
                          {pedido.id_pedido}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-[#0077b6]">
                          {pedido.nombre}
                        </div>
                        <div className="text-[#666666]">{pedido.telefono}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-[#666666]">{pedido.direccion}</div>
                      </TableCell>
                      <TableCell className="text-[#666666]">
                        {pedido.fecha}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#0077b6]">
                Estadísticas de Ventas
              </CardTitle>
              <CardDescription className="text-[#666666]">
                Analiza el rendimiento de tus ventas a lo largo del tiempo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f5f5f5] rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2 text-[#0077b6]">
                    Ventas Mensuales
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold text-[#0077b6]">
                      $45,231.89
                    </div>
                    <div className="text-sm text-[#666666]">
                      +20.1% desde el mes pasado
                    </div>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2 text-[#0077b6]">
                    Suscripciones
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold text-[#0077b6]">
                      +2,350
                    </div>
                    <div className="text-sm text-[#666666]">
                      +180.1% desde el mes pasado
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Mapa con ubicación actual */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#0077b6]">
                Tu Ubicación Actual
              </CardTitle>
              <CardDescription className="text-[#666666]">
                Este mapa muestra tu ubicación en tiempo real para el
                seguimiento de pedidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ height: "400px", width: "100%" }}>
                {typeof window !== "undefined" && (
                  <MapContainer
                    center={userLocation}
                    zoom={13}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={userLocation}>
                      <Popup>Tu estás aquí</Popup>
                    </Marker>
                  </MapContainer>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function Package2Icon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
