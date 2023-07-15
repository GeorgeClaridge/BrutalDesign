import './navbar.css';
import {Github, Logo, Figma, Linkedin} from './imports'

const Navbar = () => {
  return (
  
    <div className="flex flex-row justify-between py-6">

      <div className="Logo">
        <img src={Logo} alt="Logo" className='Logo self-center w-24'/>
      </div>

      <div className="flex justify-between self-center text-xl font-bold bg-white border-[2px] rounded-full py-4 px-5">
        <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign"><img src={Github} alt="Github" className='self-center w-10 mr-2'/></a>
        <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign"><img src={Linkedin} alt="Linkedin" className='self-center w-10 mr-2'/></a>
        <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"><img src={Figma} alt="Figma" className='Icon self-center w-10'/></a>
      </div>

    </div>


         
  )
}

export default Navbar
