"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRegister } from "@/hooks/useRegister";
import { useLogin } from "@/hooks/useLogin";

export function Registro() {
  const {
    handleRegister,
    nombre,
    setNombre,
    email,
    setEmail,
    password,
    setPassword,
    lastName,
    setLastName,
    address,
    setAddress,
    cel,
    setCel,
  } = useRegister();

  const { handleGoogleLogin } = useLogin();
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <form onSubmit={handleRegister}>
          <div className="w-full max-w-md p-6 bg-[#C4A4F3] rounded-lg shadow-lg border border-black"> {/* Fondo lila claro con borde negro */}
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-[#5D2C8C]">Regístrate</h1> {/* Texto lila más oscuro */}
                <p className="text-[#5D2C8C]">
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#5D2C8C]">Primer Nombre</Label> {/* Etiqueta lila más oscuro */}
                  <Input
                    id="name"
                    type="text"
                    placeholder="Escribe tu nombre"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#5D2C8C]">Apellido</Label> {/* Etiqueta lila más oscuro */}
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Escribe tu apellido"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#5D2C8C]">Celular</Label> {/* Etiqueta lila más oscuro */}
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Ingresa tu número de celular"
                    required
                    value={cel}
                    onChange={(e) => setCel(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#5D2C8C]">Correo</Label> {/* Etiqueta lila más oscuro */}
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#5D2C8C]">Contraseña</Label> {/* Etiqueta lila más oscuro */}
                  <Input
                    id="password"
                    type="password"
                    placeholder="Ingresa una contraseña segura"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-[#5D2C8C]">Dirección</Label> {/* Etiqueta lila más oscuro */}
                  <Input
                    id="address"
                    type="text"
                    placeholder="Escribe tu dirección completa"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-[#8A2BE2] text-white hover:bg-[#8A2BE2]"> 
                  Registrarme
                </Button>
              </div>
              <Button onClick={handleGoogleLogin} className="w-full bg-[#8A2BE2] text-white hover:bg-[#8A2BE2]">
                Inicia sesión con Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-[#5D2C8C]">
                Ya tienes una cuenta?{" "}
                <Link href="/login" className="underline text-[#5D2C8C]" prefetch={false}>
                  Inicia sesión
                </Link>
              </div>
          </div>
        </form>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-2/3">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <img
          src="/Login.jpg"
          alt="Background image"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>
      </div>
    </div>
  );
}

