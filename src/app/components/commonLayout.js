import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const CommonLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default CommonLayout
