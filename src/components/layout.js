import React from "react"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <p className='textLeft'>К у л ь т у р а</p>
  <p className='textRight'>Г е д о н и з м а</p>
      {children}
      <Footer />
    </div>
  )
}
