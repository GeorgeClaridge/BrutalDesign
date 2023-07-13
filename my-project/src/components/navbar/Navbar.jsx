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
        <div className="Link self-center pl-[0.6rem] pr-3 text-purple">WEBSITE FILES:</div>
        <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign" className="Link self-center pr-3 hover:underline cursor-pointer">GITHUB</a>
        <img src={Github} alt="Github" className='Icon self-center w-8 mr-3'/>
        <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1" className="Link self-center pr-3 hover:underline cursor-pointer">FIGMA</a>
        <img src={Figma} alt="Figma" className='Icon self-center w-8 mr-3'/>
      </div>

    </div>


         
  )
}

export default Navbar
