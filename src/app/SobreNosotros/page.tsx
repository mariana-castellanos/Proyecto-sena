import { Footer } from '@/components/component/footer'
import { Navbar } from '@/components/component/navbar'
import SobreNosotros from '@/components/component/SobreNosotros'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <SobreNosotros/>
        < Footer/>
    </div>
  )
}

export default page