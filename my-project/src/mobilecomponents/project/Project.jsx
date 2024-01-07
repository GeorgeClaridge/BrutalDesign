import { Wubble, Jumpstart, Github, Figma, Asymmetric, Guide } from "./imports"

const Project = () => {
  return (
    <div className="pb-4 pt-12">
      <div className="shadow-solid-primary rounded-t-[20px] border-[2px] bg-purple py-2">
        <div className="flex justify-center font-IBMmono text-2xl font-bold">
          Project
        </div>
      </div>

      <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
        <div className="Content grid grid-cols-1 gap-12 p-4">
          <div className="Container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://georgeclaridge.github.io/FakeCompany/"
            >
              <div className="flex h-[10rem] justify-items-center">
                <img src={Wubble} alt="" className="mx-auto w-40" />
              </div>
              <div className="Header cursor-pointer text-center font-IBMmono text-2xl font-bold hover:underline">
                Wubble - Software
              </div>
            </a>
            <div className="SubHeader text-center font-IBMmono text-base font-bold text-purple">
              React - Tailwind - Vite
            </div>
            <div class="flex justify-center pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GeorgeClaridge/FakeCompany"
              >
                <img
                  src={Github}
                  alt="Github"
                  className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
              </a>
              <div className="px-2"></div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/file/yUf60Lk7wxET028cQ6ukCS/Fake-Company?type=design&node-id=0%3A1&mode=design&t=Pf2YGu5ct6nPxVTN-1"
              >
                <img
                  src={Figma}
                  alt="Figma"
                  className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
              </a>
            </div>
          </div>

          <div className="Container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://georgeclaridge.github.io/JumpStart/"
            >
              <div className="h-[10rem]">
                <img src={Jumpstart} alt="" className="mx-auto w-40" />
              </div>
              <div className="Header cursor-pointer text-center font-IBMmono text-2xl font-bold hover:underline">
                Jumpstart - Productivity
              </div>
            </a>
            <div className="SubHeader text-center font-IBMmono text-base font-bold text-purple">
              React - Tailwind - Vite
            </div>
            <div class="flex justify-center pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/GeorgeClaridge/JumpStart"
              >
                <img
                  src={Github}
                  alt="Github"
                  className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
              </a>
              <div className="px-2"></div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/file/KBekInHW5UhFRExjtSroug/Untitled?type=design&mode=design&t=T3XLZyteNJLgl64D-0"
              >
                <img
                  src={Figma}
                  alt="Figma"
                  className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
              </a>
            </div>
          </div>

          <div className="Container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/file/JnuybEp3eDS5XqzJX9X84A/Asymmetric?type=design&node-id=0%3A1&mode=design&t=rZIlnhTMN6iHfpxp-1"
            >
              <div className="h-[10rem]">
                <img src={Asymmetric} alt="" className="mx-auto w-32" />
              </div>
              <div className="Header cursor-pointer text-center font-IBMmono text-2xl font-bold hover:underline">
                Asymmetric
              </div>
            </a>
            <div className="SubHeader text-center font-IBMmono text-base font-bold text-purple">
              Figma Design - React WIP
            </div>
            <div class="flex justify-center pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/file/JnuybEp3eDS5XqzJX9X84A/Asymmetric?type=design&node-id=0%3A1&mode=design&t=rZIlnhTMN6iHfpxp-1"
              >
                <img
                  src={Figma}
                  alt="Figma"
                  className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
