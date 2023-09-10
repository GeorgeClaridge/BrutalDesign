const ProjectHeader = () => {

  return (
    <div>
      <div className="PlaceHolder"></div>

      <div className="flex justify-between">

          <div className="w-[32%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
              <div className="center text-2xl font-semibold">Neubrutalism</div>
            </div>

            <div className="Content rounded-b-[20px] border-[2px] border-t-0 p-5 h-[90%]">
              <div className="Header text-2xl text-purple">React - Tailwind</div>

              <div className="Text pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

              <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-3 mb-4 text-base hover:-translate-y-1 hover:scale-110 duration-300">Github Repository</button></a>
            </div>
          </div>

          <div className="w-[32%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
              <div className="center text-2xl font-semibold">Figma Layout</div>
            </div>

            <div className="Content rounded-b-[20px] border-[2px] border-t-0 p-5 h-[90%]">
              <div className="Header text-2xl text-purple">React - Tailwind</div>

              <div className="Text pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

              <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/figma-plugin"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-3 mb-4 text-base hover:-translate-y-1 hover:scale-110 duration-300">Github Repository</button></a>
            </div>
          </div>

          <div className="w-[32%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
              <div className="center text-2xl font-semibold">Friends App</div>
            </div>

            <div className="Content rounded-b-[20px] border-[2px] border-t-0 p-5 h-[90%]">
              <div className="Header text-2xl text-purple">RubyOnRails - Bootstrap</div>

              <div className="Text pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

              <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/RubyOnRails_SVG-Inline"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-3 mb-4 text-base hover:-translate-y-1 hover:scale-110 duration-300">Github Repository</button></a>
            </div>
          </div>

      </div>
    </div>
  )
}

export default ProjectHeader
