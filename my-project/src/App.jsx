import "./App.css"
import { Navbar, Tool, Header } from "./components"
import {
  MobileHeader,
  MobileNavbar,
  MobileTool,
  MobileSkills,
  MobileProject,
} from "./mobilecomponents"
import { Background } from "./assets"

function App() {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="padding hidden px-[4rem] pb-[3rem] lg:block">
        <Navbar />
        <Header />
        <Tool />
      </div>

      <div className="px-5 lg:hidden xl:hidden 2xl:hidden">
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
