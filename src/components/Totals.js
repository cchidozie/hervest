import React from 'react'

const Totals = () => {
  return (
    <section className='totals'>
      <div>
        <span>Available balance</span>
        <h3>₦2,000,173.07</h3>
      </div>
      <div>
        <span>Impact Investment</span>
        <h3>₦1,000,188.05</h3>
      </div>
      <div>
        <span>Total Savings</span>
        <h3>₦500,093.99</h3>
      </div>
      <div>
        <span>Total Returns</span>
        <h3>₦56,173.22</h3>
      </div>
      <img
        src='https://i.imgur.com/FIDglRe.png'
        alt='round'
        className='round'
      />
      <img
        src='https://i.imgur.com/FIDglRe.png'
        alt='round'
        className='roundOne'
      />
    </section>
  )
}

export default Totals
