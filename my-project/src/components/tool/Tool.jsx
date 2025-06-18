import "./tool.css"

const Tool = () => {
  return (
    <div className="Contatienr flex flex-row justify-between pt-12">
      <div className="w-[60%] pr-6">
        <div className="shadow-solid-primary flex flex-row justify-center rounded-t-[20px] border-[2px] bg-green py-2">
          <div className="font-IBMmono text-2xl font-bold">
            What This Website Uses
          </div>
        </div>

        <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
          <div className="Content px-8 py-6">
            <div className="Header font-IBMmono text-2xl font-bold">
              Figma - <span className="text-purple">Design Tool</span>
            </div>
            <div className="Paragraph pt-1 font-IBMsans text-lg leading-8">
              This website was ideated using Figma starting with a concept and
              developed over time with neubrutalism in mind. Once I had a base
              design I began to create images and content for the website. All
              of this can be found in the Figma file.
            </div>

            <div className="Header pt-6 font-IBMmono text-2xl font-bold">
              React - <span className="text-purple">JavaScript Library</span>
            </div>
            <div className="Paragraph pt-1 font-IBMsans text-lg leading-8">
              I choose React as my javascript library for this project as i
              wanted to learn more about React’s hooks. I have mainly used Ruby
              On Rails in the past and wanted to keep this website as an
              educational project so i could learn more.
            </div>

            <div className="Header pt-6 font-IBMmono text-2xl font-bold">
              Tailwind - <span className="text-purple">CSS Framework</span>
            </div>
            <div className="Paragraph pt-1 font-IBMsans text-lg leading-8">
              I picked Tailwind as my css framework due to it being highly
              customisable and allowing me to use PurgeCss which keeps my file
              sizes and load times small. This allows me to create website with
              less restrictions in the future.
            </div>
          </div>
        </div>
      </div>

      <div className="w-[40%]">
        <div className="shadow-solid-primary flex flex-row justify-between rounded-t-[20px] border-[2px] bg-purple py-2">
          <div className="left flex pl-3">
            <div className="Circle my-auto h-[1.5rem] w-[1.5rem] rounded-full border-[2px] bg-white"></div>
          </div>

          <div className="font-IBMmono text-2xl font-bold">Github</div>

          <div className="left flex pr-3">
            <div className="Circle my-auto h-[1.5rem] w-[1.5rem] rounded-full border-[2px] bg-white"></div>
          </div>
        </div>

        <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
          <div className="center list-none px-8 py-6 font-IBMmono text-xl font-bold">
            <ul>
              <li className="flex justify-between pb-2">
                <div className="Header">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://georgeclaridge.github.io/JumpStart/"
                    className="cursor-pointer text-xl hover:underline"
                  >
                    Jumpstart - Productivity Company WIP
                  </a>
                  <div className="SubHeader text-base text-purple">
                    React - Tailwind - Vite
                  </div>
                </div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://georgeclaridge.github.io/FakeCompany/"
                    className="cursor-pointer text-xl hover:underline"
                  >
                    Wubble - Fake Software Company
                  </a>
                  <div className="SubHeader text-base text-purple">
                    React - Tailwind - Vite
                  </div>
                </div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/GeorgeClaridge/HealthTech-Sql"
                    className="cursor-pointer text-xl hover:underline"
                  >
                    HealthTech SQL
                  </a>
                  <div className="SubHeader text-base text-purple">SQL</div>
                </div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/GeorgeClaridge/RubyOnRailsFriendsApp"
                    className="cursor-pointer text-xl hover:underline"
                  >
                    Ruby On Rails Devise Login
                  </a>
                  <div className="SubHeader text-base text-purple">
                    Codemy Course
                  </div>
                </div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/GeorgeClaridge/RubyOnRails-CompanyLayout"
                    className="cursor-pointer text-xl hover:underline"
                  >
                    Ruby On Rails Company Layout
                  </a>
                  <div className="SubHeader text-base text-purple">
                    Ruby On Rails - SVG Inline
                  </div>
                </div>
              </li>
            </ul>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GeorgeClaridge?tab=repositories"
            >
              <button className="shadow-solid-primary mb-4 mt-2 rounded-lg border-[2px] bg-green px-3 py-2 font-IBMmono text-base duration-300 hover:-translate-y-1 hover:scale-110">
                All Repositories
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tool
