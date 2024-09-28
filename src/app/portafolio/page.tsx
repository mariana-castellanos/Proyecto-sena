import { Footer } from '@/components/component/footer'
import { Navbar } from '@/components/component/navbar'
import { Portafolio } from '@/components/component/portafolio'
import React from 'react'

function page() {
  return (
    <div>
        < Navbar/>
        < Portafolio/>
        < Footer/>
    </div>
  )
}

export default page