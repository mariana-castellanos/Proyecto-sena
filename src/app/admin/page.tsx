import { Admin } from '@/components/component/admin'
import { Footer } from '@/components/component/footer'
import { Navbar } from '@/components/component/navbar'
import React from 'react'

function page() {
  return (
    <div>
        < Navbar/>
        < Admin/>
        < Footer/>
    </div>
  )
}

export default page