import React from 'react'
import Contact from '../components/contact/Contact'
import Navbar from '../components/Navbar'

const ContactPage = () => {
  return (
    <div>
      <Navbar showLogo={false}/>
      <Contact/>
    </div>
  )
}

export default ContactPage
