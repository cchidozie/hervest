import React from 'react'
import logo from '../../icons/logo.svg'

import Menu from './Menu'

const Sidebar = (props) => {
  const { items } = props
  return (
    <section className='hervest-sidebar-container'>
      <article className='hervest-sidebar'>
        <div>
          <img src={logo} alt='hervest Logo' />
        </div>
        <p className='menu-text'>MENU</p>
        <Menu id={items[0].id} name={items[0].name} image={items[0].image} />
        <Menu id={items[1].id} name={items[1].name} image={items[1].image} />
        <Menu id={items[2].id} name={items[2].name} image={items[2].image} />
        <Menu id={items[3].id} name={items[3].name} image={items[3].image} />
        <Menu id={items[4].id} name={items[4].name} image={items[4].image} />
        <Menu id={items[5].id} name={items[5].name} image={items[5].image} />
        <Menu id={items[6].id} name={items[6].name} image={items[6].image} />
        <Menu id={items[7].id} name={items[7].name} image={items[7].image} />
        <Menu id={items[8].id} name={items[8].name} image={items[8].image} />
        <Menu id={items[9].id} name={items[9].name} image={items[9].image} />
        <Menu id={items[10].id} name={items[10].name} image={items[10].image} />
        
      </article>
    </section>
  )
}

export default Sidebar
