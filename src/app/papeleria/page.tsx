import { Footer } from '@/components/component/footer'
import { Navbar } from '@/components/component/navbar'
import { Papeleria } from '@/components/component/papeleria'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar />
        <Papeleria />
        <Footer />
    </div>
  )
}

export default page