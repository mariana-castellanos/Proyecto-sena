import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function PerfilDomiciliario() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#0077b6] text-white py-4 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 md:h-10 md:w-10 lg:h-12 lg:w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar del usuario" />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-bold md:text-2xl lg:text-3xl" style={{color: 'white'}}>Camilo</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
              <li>
                <Link href="/main" className="hover:underline" prefetch={false} style={{color: 'white'}}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/pedidos" className="hover:underline" prefetch={false} style={{color: 'white'}}>
                  Pedidos
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline" prefetch={false} style={{color: 'white'}}>
                  Cerrar sesion
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-[#f0f4f8] flex-1 flex items-center justify-center py-12 px-4 md:px-8 lg:px-12">
        <Card className="w-full max-w-[800px] bg-white rounded-lg shadow-lg">
          <CardHeader className="bg-[#0077b6] text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4 md:h-16 md:w-16 lg:h-20 lg:w-20">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar del usuario" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold md:text-2xl lg:text-3xl" style={{color: 'white'}}>Camilo</h2>
                <p className="text-sm md:text-base lg:text-lg" style={{color: 'white'}}>Domiciliario</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <Label htmlFor="name" style={{color: 'blue'}}>Nombre</Label>
                <Input id="name" value="Camilo" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="phone"  style={{color: 'blue'}}>Teléfono</Label>
                <Input id="phone" value="+57 (311) 591-8355" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="email"  style={{color: 'blue'}}>Correo electrónico</Label>
                <Input id="email" value="camilo13@gmail.com" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="name"  style={{color: 'blue'}}>Identificacion</Label>
                <Input id="identification" value="1034281342" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="Age"  style={{color: 'blue'}}>Edad</Label>
                <Input id="Age" value="32" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="vehicle"  style={{color: 'blue'}}>Tipo de vehiculo</Label>
                <Input id="vehicle" value="Moto" readOnly className="bg-[#f0f4f8]" />
              </div>
              
            </div>
            
            <Separator className="my-6 md:my-8 lg:my-10" />
            
          </CardContent>
        </Card>
      </div>
      
     </div>
  )
}
