import './navbar.css';
import {Github, Logo, Figma} from './imports'

const Navbar = () => {
  return (
  
    <div className="flex flex-row justify-between py-6">

      <div className="Logo flex">
        <div className="Logo">
          <img src={Logo} alt="Logo" className='Logo self-center w-24'/>
        </div>
        <div className="Brand self-center text-xl font-bold text-purple pl-4">
          <div className="test">Neubrutalism</div>
          <div className="test">Project</div>
        </div>
      </div>

      <div className="flex justify-between self-center text-xl font-bold bg-white border-[2px] shadow-solid-primary rounded-full py-4 px-5">
        <div className="Link self-center pr-3 text-purple">WEBSITE FILES:</div>
        <div className="Link self-center pr-3">GITHUB</div>
        <img src={Github} alt="Github" className='Icon self-center w-8 mr-3'/>
        <div className="Link self-center pr-3">FIGMA</div>
        <img src={Figma} alt="Figma" className='Icon self-center w-8 mr-2'/>
      </div>

    </div>


         
  )
}

export default Navbar
