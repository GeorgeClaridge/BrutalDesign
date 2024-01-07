import "./navbar.css"
import { Github, Logo, Figma } from "./imports"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-6">
      <div className="flex font-IBMmono">
        <div className="">
          <img src={Logo} alt="Logo" className="Logo w-24 self-center" />
        </div>
        <div className="self-center pl-4 text-xl font-bold text-purple">
          <div className="">Neubrutalism</div>
          <div className="">Project</div>
        </div>
      </div>

      <div className="shadow-solid-primary IBMmono flex justify-between self-center rounded-full border-[2px] bg-white px-5 py-4 text-xl font-bold">
        <div className="Link self-center pl-[0.6rem] pr-3 text-purple">
          WEBSITE FILES:
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/GeorgeClaridge/BrutalDesign"
          className="Link cursor-pointer self-center pr-3 underline-offset-4 hover:underline"
        >
          GITHUB
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/GeorgeClaridge/BrutalDesign"
        >
          <img
            src={Github}
            alt="Github"
            className="Icon mr-3 w-8 self-center duration-300 hover:-translate-y-1 hover:scale-110"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"
          className="Link cursor-pointer self-center pr-3 underline-offset-4 hover:underline"
        >
          FIGMA
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"
        >
          <img
            src={Figma}
            alt="Figma"
            className="Icon mr-3 w-8 cursor-pointer self-center duration-300 hover:-translate-y-1 hover:scale-110 hover:underline"
          />
        </a>
      </div>
    </div>
  )
}

export default Navbar
