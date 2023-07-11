import './tool.css';

const Tool = () => {
  return (
    <div className="Contatienr flex flex-row justify-between pt-12">

      <div className="w-[60%] pr-6">

        <div className="bg-green rounded-t-[20px] border-[2px] flex flex-row justify-center shadow-solid-primary py-2">

          <div className="text-2xl font-semibold">What This Website Uses</div>

        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content p-12">

            <div className="Header text-3xl font-semibold pt-6">Figma - <span className='text-purple'>Design Tool</span></div>
            <div className="Paragraph font-IBMsans font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

            <div className="Header text-3xl font-semibold pt-6">React - <span className='text-purple'>JavaScript Library</span></div>
            <div className="Paragraph font-IBMsans font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

            <div className="Header text-3xl font-semibold pt-6">Tailwind - <span className='text-purple'>CSS Framework</span></div>
            <div className="Paragraph font-IBMsans font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

          </div>
        </div>

      </div>

      <div className="w-[40%]">

        <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-between shadow-solid-primary py-2">
          <div className="left pl-3 flex">
            <div className="Circle h-[1.5rem] w-[1.5rem] bg-white rounded-full border-[2px] my-auto"></div>
          </div>

          <div className="text-2xl font-semibold">Github</div>

          <div className="left pr-3 flex">
            <div className="Circle h-[1.5rem] w-[1.5rem] bg-white rounded-full border-[2px] my-auto"></div>
          </div>
        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="center py-6 px-8 text-xl font-bold list-none">

            <ul>
              <li className="flex justify-between py-2">
                <div className="Header">
                  <div className="Header text-xl">React Figma Template</div>
                  <div className="SubHeader text-base text-purple">React - Tailwind - Vite</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <div className="Header text-xl">HealthTech SQL</div>
                  <div className="SubHeader text-base text-purple">SQL</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <div className="Header text-xl">Ruby On Rails Friends</div>
                  <div className="SubHeader text-base text-purple">Ruby On Rails - SQLite - SVG Inline</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <div className="Header text-xl">Ruby On Rails Devise Login</div>
                  <div className="SubHeader text-base text-purple">Codemy Course</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <div className="Header text-xl">Ruby On Rails Company Layout</div>
                  <div className="SubHeader text-base text-purple">Ruby On Rails - SVG Inline</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

            </ul>

            <button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-2 mb-4 text-base">All Repositorys</button>

          </div>
        </div>

      </div>

    </div>
  )
}
export default Tool
