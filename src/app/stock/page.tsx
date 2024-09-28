import { Footer } from '@/components/component/footer'
import { Navbar } from '@/components/component/navbar'
import { Stock } from '@/components/component/stock'
import React from 'react'

function page() {
  return (
    <div>
        < Navbar/>
        < Stock/>
        < Footer/>
    </div>
  )
}

export default page