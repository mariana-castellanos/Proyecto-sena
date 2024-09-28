import { Footer } from '@/components/component/footer'
import { FormularioPago } from '@/components/component/formulario-pago'
import { Navbar } from '@/components/component/navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        < FormularioPago/>
        < Footer/>
    </div>
  )
}

export default page