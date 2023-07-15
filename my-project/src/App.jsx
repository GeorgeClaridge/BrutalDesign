import './App.css'
import { Navbar,Tool, Header } from './components'
import { Background, Construct } from './assets'

function App() {

  return (
    <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Background})` }}>
      <div className="padding px-[4rem] pb-[3rem] hidden lg:block">
        <Navbar />
        <Header />
        <Tool />
      </div>

      <div className="MobileTest lg:hidden xl:hidden 2xl:hidden flex justify-center items-center flex-col py-10 h-screen w-[100%]">
        <div className="Header text-2xl">Mobile Is Under Construction</div>
        <img src={Construct} alt="Under Construction" className='hover:-translate-y-1 hover:scale-110 duration-300 w-[70%] py-2'/>
        <div className="Header ">Please View Website On Desktop</div>
        <div className="Header ">mobile should be finished soon</div>
      </div>
    </div>
  )
}

export default App
