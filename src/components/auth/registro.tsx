"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRegister } from "@/hooks/useRegister";

export function Registro() {
  const {
    handleRegister,
    nombre,
    setNombre,
    email,
    setEmail,
    password,
    setPassword,
  } = useRegister();

  return (
    <div className="flex min-h-screen w-full">
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <form onSubmit={handleRegister}>
          <div className="w-full max-w-md p-6 bg-background rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-muted-foreground">
                  Create your account below
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">First Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                {/*<div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" required />
              </div>*/}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="**********"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/*<div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" type="text" placeholder="123 Main St, Anytown USA" required />
              </div>*/}
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline" prefetch={false}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-2/3">
        <img
          src="/placeholder.svg"
          alt="Background image"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>
    </div>
  );
}
