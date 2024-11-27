"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";

export function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleGoogleLogin,
  } = useLogin();

  return (
    <div className="flex min-h-screen w-full">
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <form onSubmit={handleLogin}>
          <div className="w-full max-w-md p-6 bg-[#C4A4F3] rounded-lg shadow-lg border border-black">
            {" "}
            {/* Fondo lila más oscuro con borde negro */}
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-[#5D2C8C]">
                  Iniciar sesión
                </h1>{" "}
                {/* Texto en lila más oscuro */}
                <p className="text-[#5D2C8C]"> {/* Texto lila más oscuro */}</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#5D2C8C]">
                    Correo
                  </Label>{" "}
                  {/* Etiqueta lila más oscuro */}
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa el correo con el que te registraste"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#5D2C8C]">
                    Contraseña
                  </Label>{" "}
                  {/* Etiqueta lila más oscuro */}
                  <Input
                    id="password"
                    type="password"
                    placeholder="Ingresa la contraseña con la que te registraste"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#8A2BE2] text-white hover:bg-[#8A2BE2]"
                >
                  {" "}
                  {/* Botón lila claro */}
                  Iniciar sesión
                </Button>
                <Button
                  onClick={handleGoogleLogin}
                  className="w-full bg-[#8A2BE2] text-white hover:bg-[#8A2BE2]"
                >
                  Inicia sesión con Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-[#5D2C8C]">
                Aún no tienes una cuenta?{" "}
                <Link
                  href="/registro"
                  className="underline text-[#5D2C8C]"
                  prefetch={false}
                >
                  Regístrate
                </Link>
              </div>
              <div className="mt-4 text-center text-sm text-[#5D2C8C]">
                Olvidaste la contraseña{" "}
                <Link
                  href="/recuperar"
                  className="underline text-[#5D2C8C]"
                  prefetch={false}
                >
                  Recuperar
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-2/3">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
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
