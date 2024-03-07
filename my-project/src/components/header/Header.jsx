import "./header.css"
import {
  Min,
  Full,
  Close,
  Github,
  Linkedin,
  Figma,
  About,
  Contact,
  Home,
  Project,
  Skills,
  HomeHeader,
  SkillHeader,
  AboutHeader,
  TestHeader,
  ProjectHeader,
  RudeHeader,
} from "./imports"
import { useState } from "react"

const Header = () => {
  const [Container, SetContainer] = useState(HomeHeader)
  const [HeaderContainer, SetHeaderContainer] = useState("HOME")

  const HomeButton = () => {
    SetContainer(HomeHeader)
    SetHeaderContainer("HOME")
  }

  const SkillButton = () => {
    SetContainer(SkillHeader)
    SetHeaderContainer("SKILLS")
  }

  const ProjectButton = () => {
    SetContainer(ProjectHeader)
    SetHeaderContainer("PROJECTS")
  }

  const AboutButton = () => {
    SetContainer(AboutHeader)
    SetHeaderContainer("ABOUT")
  }

  const TestButton = () => {
    SetContainer(TestHeader)
    SetHeaderContainer("TESTING")
  }

  const RudeButton = () => {
    SetContainer(RudeHeader)
    SetHeaderContainer("THAT WAS RUDE")
  }

  return (
    <div className="Contatienr flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="Container pb-6">
          <div className="shadow-solid-primary flex flex-row justify-center rounded-t-[20px] border-[2px] bg-purple py-2">
            <div className="center font-IBMmono text-2xl font-bold">NAVBAR</div>
          </div>

          <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
            <ul className="list-none px-10 py-8 font-IBMmono text-xl font-bold">
              <li className="flex pb-4">
                <img
                  onClick={HomeButton}
                  src={Home}
                  alt="Home"
                  className="Icon mr-4 w-12 cursor-pointer self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
                <div
                  onClick={HomeButton}
                  className="cursor-pointer self-center underline-offset-4 duration-500 hover:underline"
                >
                  Homepage
                </div>
              </li>

              <li className="flex py-4">
                <img
                  onClick={SkillButton}
                  src={Skills}
                  alt="Skills"
                  className="Icon mr-4 w-12 cursor-pointer self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
                <div
                  onClick={SkillButton}
                  className="cursor-pointer self-center underline-offset-4 hover:underline"
                >
                  My Skills
                </div>
              </li>

              <li className="flex py-4">
                <img
                  onClick={ProjectButton}
                  src={Project}
                  alt="Project"
                  className="Icon mr-4 w-12 cursor-pointer self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
                <div
                  onClick={ProjectButton}
                  className="cursor-pointer self-center underline-offset-4 hover:underline"
                >
                  My Projects
                </div>
              </li>

              <li className="flex py-4">
                <img
                  onClick={AboutButton}
                  src={About}
                  alt="About"
                  className="Icon mr-4 w-12 cursor-pointer self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
                <div
                  onClick={AboutButton}
                  className="cursor-pointer self-center underline-offset-4 hover:underline"
                >
                  About Me
                </div>
              </li>

              <li className="flex py-4">
                <img
                  onClick={TestButton}
                  src={Contact}
                  alt="Contact"
                  className="Icon mr-4 w-12 cursor-pointer self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
                <div
                  onClick={TestButton}
                  className="cursor-pointer self-center underline-offset-4 hover:underline"
                >
                  Testing
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="shadow-solid-primary flex justify-between rounded-full border-[2px] bg-white px-5 py-4 text-xl font-bold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GeorgeClaridge"
          >
            <img
              src={Github}
              alt="Github"
              className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/george-claridge-6a5a1721b/"
          >
            <img
              src={Linkedin}
              alt="Linkedin"
              className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GeorgeClaridge/BrutalDesign"
          >
            <img
              src={Figma}
              alt="Figma"
              className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>
        </div>
      </div>

      <div className="w-[80%] pl-6">
        <div className="shadow-solid-primary flex flex-row justify-between rounded-t-[20px] border-[2px] bg-green py-2 ">
          <div className="left flex w-[8rem] pl-4">
            <div className="Circle my-auto mr-1 h-[1.5rem] w-[1.5rem] rounded-full border-[2px] bg-white"></div>
            <div className="Circle my-auto h-[1.5rem] w-[1.5rem] rounded-full border-[2px] bg-white"></div>
          </div>

          <div className="center font-IBMmono text-2xl font-bold">
            {HeaderContainer}
          </div>

          <div className="right flex w-[8rem] justify-between pr-4">
            <img src={Min} alt="Min" className="Icon w-4 self-center" />
            <img src={Full} alt="Full" className="Icon w-4 self-center" />
            <img
              onClick={RudeButton}
              src={Close}
              alt="Close"
              className="Icon w-6 cursor-pointer self-center"
            />
          </div>
        </div>

        <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
          <div className="Content min-h-[40rem] p-12">{Container}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
