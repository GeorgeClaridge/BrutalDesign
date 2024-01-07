import "./info.css"
import { Github, Linkedin } from "./imports"

const Info = () => {
  return (
    <div className="pt-12">
      <div className="shadow-solid-primary rounded-t-[20px] border-[2px] bg-purple py-2">
        <div className="flex justify-center font-IBMmono text-2xl font-bold">
          SKILLS
        </div>
      </div>

      <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
        <div className="Content p-4">
          <div className="Header text-xl font-bold">
            Figma - <span className="text-purple">Design Tool</span>
          </div>
          <div className="Paragraph font-IBMsans text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
          </div>

          <div className="Header pt-6 text-xl font-bold">
            React - <span className="text-purple">JavaScript Library</span>
          </div>
          <div className="Paragraph font-IBMsans text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
          </div>

          <div className="Header pt-6 text-xl font-bold">
            Tailwind - <span className="text-purple">CSS Framework</span>
          </div>
          <div className="Paragraph font-IBMsans text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
          </div>
        </div>
      </div>

      <div className="pb-4 pt-12">
        <div className="shadow-solid-primary rounded-t-[20px] border-[2px] bg-green py-2">
          <div className="flex justify-center font-IBMmono text-2xl font-bold">
            CONTACT
          </div>
        </div>

        <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
          <div className="Content flex flex-col p-4 text-center">
            <div className="Picture h-[10rem] w-[10rem] self-center rounded-full bg-purple"></div>

            <div className="Header pt-3 text-3xl font-bold">
              GEORGE CLARIDGE
            </div>
            <div className="SubHeader text-xl font-bold text-purple">
              LETS TALK
            </div>
            <div className="Email">Email: glgclaridge@gmail.com</div>

            <div className="Links flex justify-center pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GeorgeClaridge/BrutalDesign"
              >
                <img
                  src={Github}
                  alt="Github"
                  className="mr-2 w-10 self-center"
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
                  className="mr-2 w-10 self-center"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info
