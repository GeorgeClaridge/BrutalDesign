import './App.css'
import { Navbar,Tool, Header } from './components'
import { MobileHeader, MobileNavbar, MobileTool, MobileSkills, MobileProject } from './mobilecomponents'
import { Background } from './assets'

function App() {

  return (
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Background})` }}>
      <div className="padding px-[4rem] pb-[3rem] hidden lg:block">
        <Navbar />
        <Header />
        <Tool />
      </div>

      <div className="lg:hidden xl:hidden 2xl:hidden px-5"> 
        <MobileNavbar />
        <MobileHeader />
        <MobileProject />
        <MobileSkills />
        <MobileTool />
      </div>
    </div>
  )
}

export default App
