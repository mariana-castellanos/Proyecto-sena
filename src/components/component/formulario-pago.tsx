import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export function FormularioPago() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8 lg:p-12">
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <CardHeader>
          <CardTitle>Método de Pago</CardTitle>
          <CardDescription>Selecciona tu método de pago preferido.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:gap-6">
          <RadioGroup defaultValue="daviplata" className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            <div>
              <RadioGroupItem value="daviplata" id="daviplata" className="peer sr-only" />
              <Label
                htmlFor="daviplata"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <WalletCardsIcon className="mb-1 sm:mb-3 h-5 w-5 sm:h-6 sm:w-6" />
                Daviplata
              </Label>
            </div>
            <div>
              <RadioGroupItem value="nequi" id="nequi" className="peer sr-only" />
              <Label
                htmlFor="nequi"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <WalletCardsIcon className="mb-1 sm:mb-3 h-5 w-5 sm:h-6 sm:w-6" />
                Nequi
              </Label>
            </div>
            <div>
              <RadioGroupItem value="efectivo" id="efectivo" className="peer sr-only" />
              <Label
                htmlFor="efectivo"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <DollarSignIcon className="mb-1 sm:mb-3 h-5 w-5 sm:h-6 sm:w-6" />
                Efectivo
              </Label>
            </div>
          </RadioGroup>
          <div className="grid gap-1 sm:gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Nombre" />
          </div>
          <div className="grid gap-1 sm:gap-2">
            <Label htmlFor="lastname">Apellido</Label>
            <Input id="lastname" placeholder="Apellido" />
          </div>
          <div className="grid gap-1 sm:gap-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" placeholder="Teléfono" />
          </div>
          <div className="grid gap-1 sm:gap-2">
            <Label htmlFor="address">Dirección</Label>
            <Input id="address" placeholder="Dirección" />
          </div>
          <div className="grid gap-1 sm:gap-2">
            <Label htmlFor="housing">Tipo de Vivienda</Label>
            <RadioGroup defaultValue="casa" className="flex items-center gap-2 sm:gap-4">
              <Label
                htmlFor="casa"
                className="flex items-center gap-1 sm:gap-2 rounded-md border-2 border-muted bg-popover p-2 sm:p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem id="casa" value="casa" className="peer sr-only" />
                Casa
              </Label>
              <Label
                htmlFor="apartamento"
                className="flex items-center gap-1 sm:gap-2 rounded-md border-2 border-muted bg-popover p-2 sm:p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem id="apartamento" value="apartamento" className="peer sr-only" />
                Apartamento
              </Label>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <div className="grid gap-2">
            <p className="text-xs sm:text-sm text-muted-foreground">El pago se realizará cuando llegue tu pedido.</p>
            <Button className="w-full">Continuar</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletCardsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}

