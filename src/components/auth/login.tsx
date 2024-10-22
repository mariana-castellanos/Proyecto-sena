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
          <div className="w-full max-w-md p-6 bg-background rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button onClick={handleGoogleLogin}>Login with Google</Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="#" className="underline" prefetch={false}>
                  Sign up
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
