const ProjectHeader = () => {

  return (
    <div>
      <div className="HeaderContainer flex justify-center">
        <div className="Header text-6xl font-bold">PROJECTS</div>
      </div>

      <div className="flex justify-between pt-3">
          <div className="w-[30%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
              <div className="center text-2xl font-semibold">PROJECT NAME</div>
            </div>

            <div className="Content rounded-b-[20px] border-[2px] border-t-0 p-5">
              <div className="Header text-2xl text-purple">Tech</div>

              <div className="Text pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

              <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge?tab=repositories"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-3 mb-4 text-base hover:-translate-y-1 hover:scale-110 duration-300">All Repositorys</button></a>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
              <div className="center text-2xl font-semibold">PROJECT NAME</div>
            </div>

            <div className="Content rounded-b-[20px] border-[2px] border-t-0 p-5">
              <div className="Header text-2xl text-purple">Tech</div>

              <div className="Text pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

              <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge?tab=repositories"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-3 mb-4 text-base hover:-translate-y-1 hover:scale-110 duration-300">All Repositorys</button></a>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
              <div className="center text-2xl font-semibold">PROJECT NAME</div>
            </div>

            <div className="Content rounded-b-[20px] border-[2px] border-t-0 p-5">
              <div className="Header text-2xl text-purple">Tech</div>

              <div className="Text pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

              <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge?tab=repositories"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-3 mb-4 text-base hover:-translate-y-1 hover:scale-110 duration-300">All Repositorys</button></a>
            </div>
          </div>

      </div>

      


      <div className="Line border-b-[2px] pt-6"></div>
    </div>
  )
}

export default ProjectHeader
