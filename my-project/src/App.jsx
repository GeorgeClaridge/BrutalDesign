import './App.css'
import { Navbar,Tool, Header } from './components'
import { Background } from './assets'

function App() {

  return (
    <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Background})` }}>
      <div className="padding px-[4rem] pb-[3rem]">
        <Navbar />
        <Header />
        <Tool />
      </div>
    </div>
  )
}

export default App
