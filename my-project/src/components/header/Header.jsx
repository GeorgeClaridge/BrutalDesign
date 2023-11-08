import './header.css';
import { Min, Full, Close, Github, Linkedin, Figma, About, Contact, Home, Project, Skills, HomeHeader, SkillHeader, AboutHeader, TestHeader, ProjectHeader, RudeHeader } from './imports';
import { useState } from "react";

const Header = () => {

  const [Container, SetContainer] = useState(HomeHeader)
  const [HeaderContainer, SetHeaderContainer] = useState('HOME')

  const HomeButton = () => {
    SetContainer(HomeHeader);
    SetHeaderContainer('HOME');
  };

  const SkillButton = () => {
    SetContainer(SkillHeader);
    SetHeaderContainer('SKILLS');
  };

  const ProjectButton = () => {
    SetContainer(ProjectHeader);
    SetHeaderContainer('PROJECTS');
  };

  const AboutButton = () => {
    SetContainer(AboutHeader);
    SetHeaderContainer('ABOUT');
  };

  const TestButton = () => {
    SetContainer(TestHeader);
    SetHeaderContainer('TESTING');
  };

  const RudeButton = () => {
    SetContainer(RudeHeader);
    SetHeaderContainer('THAT WAS RUDE');
  };

  return (
    <div className="Contatienr flex flex-row justify-between">

      <div className="flex flex-col">
        <div className="Container pb-6">
          <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center shadow-solid-primary py-2">
            <div className="center text-2xl font-bold font-IBMmono">NAVBAR</div>
          </div>

          <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
            
            <ul className="py-8 px-10 text-xl font-bold list-none font-IBMmono">
              <li className="flex pb-4">
                <img onClick={HomeButton} src={Home} alt="Home" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                <div onClick={HomeButton} className='self-center underline-offset-4 hover:underline duration-500 cursor-pointer'>
                  Home
                </div>
              </li>

              <li className="flex py-4">
                <img onClick={AboutButton} src={About} alt="About" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                <div onClick={AboutButton} className='self-center underline-offset-4 hover:underline cursor-pointer'>
                  About
                </div>
              </li>

              <li className="flex py-4">
                <img onClick={SkillButton} src={Skills} alt="Skills" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                <div onClick={SkillButton} className='self-center underline-offset-4 hover:underline cursor-pointer'>
                  Skills
                </div>
              </li>

              <li className="flex py-4">
                <img onClick={ProjectButton} src={Project} alt="Project" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                <div onClick={ProjectButton} className='self-center underline-offset-4 hover:underline cursor-pointer'>
                  Projects
                </div>
              </li>

              <li className="flex py-4">
                <img onClick={TestButton} src={Contact} alt="Contact" className='Icon self-center w-10 mr-4 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                <div onClick={TestButton} className='self-center underline-offset-4 hover:underline cursor-pointer'>
                  Testing
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

        <div className="bg-green rounded-t-[20px] border-[2px] flex flex-row justify-between shadow-solid-primary py-2 ">
          <div className="left pl-4 flex w-[8rem]">
            <div className="Circle h-[1.5rem] w-[1.5rem] bg-white rounded-full border-[2px] mr-1 my-auto"></div>
            <div className="Circle h-[1.5rem] w-[1.5rem] bg-white rounded-full border-[2px] my-auto"></div>
          </div>

          <div className="center text-2xl font-bold font-IBMmono">{HeaderContainer}</div>

          <div className="right flex justify-between w-[8rem] pr-4">
            <img src={Min} alt="Min" className='Icon self-center w-4'/>
            <img src={Full} alt="Full" className='Icon self-center w-4'/>
            <img onClick={RudeButton} src={Close} alt="Close" className='Icon self-center w-6 cursor-pointer'/>
          </div>
        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content p-12 min-h-[40rem]">
            {Container}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header
