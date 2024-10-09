"use client";
import { Footer } from "@/components/component/footer";
import { Main } from "@/components/component/main";
import { Navbar } from "@/components/component/navbar";

import React, { useEffect, useState } from "react";

function page() {
  /* const [message, setMessage] = useState("loading")
  useEffect(() => { 
    fetch("http://localhost:8080/api/home").then(
    response => response.json()
    ).then(
      data => {
        console.log (data)
        setMessage(data.message)
      }
    )
  },[] )
    */ return (
    //  <div> {message}</div>
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default page;
