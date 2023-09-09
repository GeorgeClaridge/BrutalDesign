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
        <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign" className="Link self-center underline-offset-4 pr-3 hover:underline cursor-pointer">GITHUB</a>
        <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign"><img src={Github} alt="Github" className='Icon self-center w-8 mr-3 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
        <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1" className="Link underline-offset-4 self-center pr-3 hover:underline cursor-pointer">FIGMA</a>
        <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"><img src={Figma} alt="Figma" className='Icon self-center w-8 mr-3 hover:underline cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300'/></a>
      </div>

    </div>


         
  )
}

export default Navbar
