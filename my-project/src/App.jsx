import './App.css'
import { Navbar,Tool, Header } from './components'
import { MobileHeader, MobileNavbar, MobileTool } from './mobilecomponents'
import { Background } from './assets'

function App() {

  return (
    <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Background})` }}>
      <div className="padding px-[4rem] pb-[3rem] hidden lg:block">
        <Navbar />
        <Header />
        <Tool />
      </div>

      <div className="MobileTest lg:hidden xl:hidden 2xl:hidden px-4 py-2"> 
        <MobileNavbar />
        <MobileHeader />
        <MobileTool />
      </div>
    </div>
  )
}

export default App
