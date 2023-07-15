import './header.css';
import {FilePerson, Min, Full, Close, Github, Linkedin, Figma} from './imports'

const Header = () => {
  return (
    <div className="Contatienr flex flex-row justify-between">

      <div className="flex flex-col justify-between">
        <div className="Container">
          <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center shadow-solid-primary py-2">
            <div className="center center text-2xl font-semibold"> Navbar</div>
          </div>

          <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
            
            <ul className="center py-8 px-10 text-xl font-bold list-none">
              <li className="flex pb-4">
                <img src={FilePerson} alt="File Person" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <div className='self-center hover:underline cursor-pointer'>
                  Home
                </div>
              </li>

              <li className="flex py-4">
                <img src={FilePerson} alt="File Person" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <div className='self-center hover:underline cursor-pointer'>
                  About Me
                </div>
              </li>

              <li className="flex py-4">
                <img src={FilePerson} alt="File Person" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <div className='self-center hover:underline cursor-pointer'>
                  My Skills
                </div>
              </li>

              <li className="flex py-4">
                <img src={FilePerson} alt="File Person" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <div className='self-center hover:underline cursor-pointer'>
                  Projects
                </div>
              </li>

              <li className="flex py-4">
                <img src={FilePerson} alt="File Person" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300'/>
                <div className='self-center hover:underline cursor-pointer'>
                  Contact
                </div>
              </li>
            </ul>

          </div>
        </div>

        <div className="flex justify-between text-xl font-bold bg-white border-[2px] shadow-solid-primary rounded-full py-4 px-5">
          <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge"><img src={Github} alt="Github" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          <a target='_blank'rel='noopener noreferrer' href="https://www.linkedin.com/in/george-claridge-6a5a1721b/"><img src={Linkedin} alt="Linkedin" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign"><img src={Figma} alt="Figma" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
        </div>

      </div>

      <div className="w-[80%] pl-6">

        <div className="bg-green rounded-t-[20px] border-[2px] flex flex-row justify-between shadow-solid-primary py-2">
          <div className="left pl-3 flex">
            <div className="Circle h-[1.5rem] w-[1.5rem] bg-white rounded-full border-[2px] mr-1 my-auto"></div>
            <div className="Circle h-[1.5rem] w-[1.5rem] bg-white rounded-full border-[2px] my-auto"></div>
          </div>

          <div className="center text-2xl font-semibold">HOME</div>

          <div className="right flex justify-between w-[8rem] pr-3">
            <img src={Min} alt="Min" className='Icon self-center w-4'/>
            <img src={Full} alt="Full" className='Icon self-center w-4'/>
            <img src={Close} alt="Close" className='Icon self-center w-6'/>
          </div>
        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content p-12">
            <div className="HeaderContainer flex justify-between">

              <div className="Left">
                <div className="Header text-5xl font-bold pt-6 flex justify-center">
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    G
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    E
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    O
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    R
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    G
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110 pr-2'>
                    E
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    C
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green0 hover:scale-110'>
                    L
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    A
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    R
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    I
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    G
                  </div>
                  <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
                    E
                  </div>
                </div>

                <div className="SubHeader text-purple text-3xl font-bold pt-2">Neubrutalism</div>
              </div>

              <div className="Right self-center">
                Test
              </div>


            </div>

            <div className="text text-xl font-bold font-IBMsans pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="text text-xl font-bold font-IBMsans pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="text text-xl font-bold font-IBMsans pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="Line border-b-[2px] pt-6"></div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Header
