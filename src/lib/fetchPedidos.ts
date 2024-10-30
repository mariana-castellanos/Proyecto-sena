// lib/fetchPedidos.ts
export const fetchPedidosDomiciliario = async (id_domiciliario: number, estado: string) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/pedidos/pedidos?id_domiciliario=${id_domiciliario}&estado=${estado}`);
      if (!response.ok) {
        throw new Error('Error al obtener los pedidos');
      }
      return await response.json();
    } catch (error) {
      console.error("Error obteniendo los pedidos:", error);
      return [];
    }
  };

  // lib/fetchPedidos.ts
export const fetchPedidosCliente = async (id_domiciliario: number, estado: string) => {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/pedidos/pedidos_cliente?id_domiciliario=${id_domiciliario}&estado=${estado}`);
    if (!response.ok) {
      throw new Error('Error al obtener los pedidos');
    }
    return await response.json();
  } catch (error) {
    console.error("Error obteniendo los pedidos:", error);
    return [];
  }
};
