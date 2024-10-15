import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

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
            item.id_producto === productId && item.cantidad > 1
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          )
          .filter((item) => item.cantidad > 0) // Si la cantidad es 0, eliminamos el producto del carrito
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
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
