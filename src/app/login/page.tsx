import { Footer } from "@/components/component/footer";
import { Login } from "../../components/auth/login";
import { Navbar } from "@/components/component/navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default page;
