import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'
import React from 'react'

const contact = () => {
  return (
    <>
      <ContactHero/>
      <ContactInfo/>
      <ContactForm/>
      <ContactMap/>
    </>
  )
}

export default contact
