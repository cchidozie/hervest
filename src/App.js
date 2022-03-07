import Main from './components/Layout/Main'
import Sidebar from './components/Layout/Sidebar'
import './App.css'
import items from './items'

function App() {

  return (
    <section className='hervest-body'>
      <Sidebar items={items} />
      <Main className='hervest-main' />
    </section>
  )
}

export default App
