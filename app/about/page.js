import AboutContent from '@/components/About/AboutContent'
import AboutCTA from '@/components/About/AboutCTA'
import AboutHero from '@/components/About/AboutHero'
import CoreValues from '@/components/About/CoreValues'
import Leadership from '@/components/About/Leadership'
import React from 'react'

const about = () => {
  return (
    <>
      <AboutHero/>
      <AboutContent/>
      <CoreValues/>
      <Leadership/>
      <AboutCTA/>
    </>
  )
}

export default about
