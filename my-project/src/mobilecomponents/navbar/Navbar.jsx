import "./navbar.css"
import { Github, Logo, Figma, Linkedin } from "./imports"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-6">
      <div className="Logo">
        <img src={Logo} alt="Logo" className="Logo w-24 self-center" />
      </div>

      <div className="flex justify-between self-center rounded-full border-[2px] bg-white px-5 py-4 text-xl font-bold">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/GeorgeClaridge/BrutalDesign"
        >
          <img src={Github} alt="Github" className="mr-2 w-10 self-center" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/george-claridge-6a5a1721b/"
        >
          <img
            src={Linkedin}
            alt="Linkedin"
            className="mr-2 w-10 self-center"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"
        >
          <img src={Figma} alt="Figma" className="Icon w-10 self-center" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
