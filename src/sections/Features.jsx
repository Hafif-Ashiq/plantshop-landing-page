import React from 'react'
import { features } from '../constants'
import { Tiles } from '../components'

const Features = () => {
  return (
    <section className='main-padding  flex  justify-between '>
          {features.map((feature) => (
            <Tiles 
            key={feature.id}
            heading={feature.heading}
            exp={feature.exp}
            logo={feature.logo}
            />
          ))}
    </section>
  )
}

export default Features