"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { SVGProps } from "react";

export function Carrito() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, checkout } =
    useCart();
  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.precio_producto) * item.cantidad,
    0
  );
  return (
    <div className="w-full max-w-xs  mx-auto  bg-background shadow-lg md:w-96">
      <header className="flex items-center justify-between border-b bg-muted px-6 py-4">
        <h2 className="text-lg font-semibold">Cart</h2>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </header>
      <div className="flex-1 overflow-auto p-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <ShoppingCartIcon className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <ul className="grid gap-6">
            {cart.map((item) => (
              <li
                key={item.id_producto}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
              >
                <img
                  src="/placeholder.svg"
                  alt={item.nombre_producto}
                  width={64}
                  height={64}
                  className="rounded-md"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
                <div className="grid gap-1">
                  <h3 className="font-medium">{item.nombre_producto}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${parseFloat(item.precio_producto).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => decreaseQuantity(item.id_producto)} // Usamos decreaseQuantity del contexto
                    disabled={item.cantidad === 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="text-sm font-medium">{item.cantidad}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => increaseQuantity(item.id_producto)}
                  >
                    <PlusIcon className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id_producto)}
                  >
                    <TrashIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="sr-only">Remove from cart</span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer className="border-t bg-muted px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Total:</p>
          <p className="text-lg font-semibold">${total.toFixed(2)}</p>
        </div>
        <Button className="mt-4 w-full" onClick={checkout}>
          Comprar
        </Button>
      </footer>
    </div>
  );
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ShoppingCartIcon(
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
