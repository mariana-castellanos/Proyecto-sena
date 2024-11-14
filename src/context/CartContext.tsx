import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Modal } from "@/components/ui/modal";
import Swal from "sweetalert2";
// Definir el tipo de los productos en el carrito
interface Product {
  id_producto: number;
  nombre_producto: string;
  marca_producto: string;
  precio_producto: string;
  id_proveedor: number;
  cantidad: number;
}

// Tipo para el contexto
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  checkout: () => void;
  totalCart: number;
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Proveedor del carrito
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Usar useEffect para acceder a localStorage solo en el cliente
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []); // Solo se ejecuta cuando el componente se monta

  // Guardar el carrito en localStorage cada vez que se actualice
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]); // Se ejecuta cada vez que el carrito cambie

  // Función para agregar productos al carrito
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id_producto === product.id_producto
      );
      if (existingProduct) {
        // Si el producto ya está en el carrito, aumentamos la cantidad
        return prevCart.map((item) =>
          item.id_producto === product.id_producto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos con cantidad 1
        return [...prevCart, { ...product, cantidad: 1 }];
      }
    });
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id_producto === productId
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id_producto === productId
              ? { ...item, cantidad: item.cantidad - 1 } // Decrementamos la cantidad sin condicional
              : item
          )
          .filter((item) => item.cantidad > 0) // Luego filtramos los productos con cantidad 0
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id_producto !== productId)
    );
  };

  const totalCart = cart.reduce((acc, item) => {
    const precio = parseFloat(item.precio_producto); // Convertir el precio a número
    return acc + precio * item.cantidad;
  }, 0);

  const [isModalOpen, setModalOpen] = useState(false);
  const checkout = () => {
    setModalOpen(true); // Abre el modal cuando se da click en "Checkout"
  };

  const confirmCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user) {
      Swal.fire({
        title: "Atención",
        text: "Debes estar logueado para realizar la compra.",
        icon: "info",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
        position: "center", // Se muestra en el centro
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige solo después de que el usuario presione "Aceptar"
          window.location.href = "/login"; // Cambia '/login' a la ruta a la que quieras redirigir
        }
      });
      return;
    } else if (!user.id_usuario && !user.id) {
      Swal.fire({
        title: "Atención",
        text: "Debes estar logueado para realizar la compra.",
        icon: "info",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
        position: "center", // Se muestra en el centro
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige solo después de que el usuario presione "Aceptar"
          window.location.href = "/login"; // Cambia '/login' a la ruta a la que quieras redirigir
        }
      });
      return;
    }

    fetch("http://localhost:8080/api/v1/pedidos/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart, // El carrito con los productos
        total: totalCart,
        id_usuario: user.id_usuario, // Enviar el ID del cliente logueado
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Compra exitosa:", data);

        Swal.fire({
          title: "Gracias por tu compra",
          text: "Compra realizada con éxito",
          icon: "info",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
          position: "center", // Se muestra en el centro
        });

        setCart([]); // Vaciar el carrito después de la compra
        setModalOpen(false); // Cerrar el modal después de la confirmación
        localStorage.removeItem("cart");
      })
      .catch((error) => {
        console.error("Error al realizar la compra:", error);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        checkout,
        totalCart,
      }}
    >
      {children}

      {/* Modal de confirmación */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold">Confirmación de compra</h2>

        <ul className="my-4">
          {cart.map((item) => (
            <li key={item.id_producto}>
              {item.nombre_producto} - {item.cantidad} x $
              {parseFloat(item.precio_producto).toFixed(2)}
            </li>
          ))}
        </ul>

        <p className="text-lg font-bold text-red-600">
          Total: $
          {cart
            .reduce(
              (acc, item) =>
                acc + parseFloat(item.precio_producto) * item.cantidad,
              0
            )
            .toFixed(2)}
        </p>
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            marginTop: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          Recuerda que el pago será contraentrega al llegar el domiciliario.
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={confirmCheckout}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
          >
            Confirmar compra
          </button>
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe estar dentro del proveedor CartProvider");
  }
  return context;
};
