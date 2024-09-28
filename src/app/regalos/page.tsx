import { Footer } from '@/components/component/footer'
import { Navbar } from '@/components/component/navbar'
import { Regalos } from '@/components/component/regalos'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <Regalos />
        <Footer />
    </div>
  )
}

export default page