import React from 'react'

const Menu = (props) => {
  const { id, name, image } = props
  return (
    <section className='menu-layout'>
      <img src={image} alt={id} />
      <a href='#'>{name}</a>
    </section>
  )
}

export default Menu
