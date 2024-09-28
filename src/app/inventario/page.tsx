import { Footer } from '@/components/component/footer'
import { Inventario } from '@/components/component/inventario'
import { Navbar } from '@/components/component/navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        < Inventario/>
        < Footer/>
    </div>
  )
}

export default page