import React from 'react'
import BenefitsOne from '../BenefitsOne'
import BenefitsTwo from '../BenefitsTwo'
import BenefitsThree from '../BenefitsThree'
import Rainy from '../Rainy'
import Totals from '../Totals'
import Greeting from './Greeting'

const Main = () => {
  return (
    <section className='hervest-main-container'>
      <article className='hervest-main'>
        <Greeting />
        <Totals />
        <p className='watch'>Watch your plans</p>
        <span>A goal without a plan is a wish</span>
        <div className='rainyDiv'>
          <Rainy />
          <Rainy />
          <Rainy />
        </div>
        <div className='rainyDiv'>
          <BenefitsOne />
          <BenefitsTwo />
          <BenefitsThree />
        </div>
      </article>
    </section>
  )
}

export default Main
