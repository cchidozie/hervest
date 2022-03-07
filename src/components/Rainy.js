import React from 'react'

const Rainy = () => {
  return (
    <section className='card'>
      <div className='image-text-container '>
        <img src='https://svgshare.com/i/ewL.svg' alt='' />
        <p>Saving for rainy day</p>
      </div>
      <div>
        <h2>N400,000</h2>
        <progress className='progress' value='50' max='100'></progress>
      </div>
    </section>
  )
}

export default Rainy
