import './tool.css';

const Tool = () => {
  return (
    <div className="Contatienr pt-12">

        <div className="bg-purple rounded-t-[20px] border-[2px] shadow-solid-primary py-2">
          <div className="text-2xl font-semibold flex justify-center">This Uses</div>
        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content p-4">

            <div className="Header text-xl font-bold pt-6">Figma - <span className='text-purple'>Design Tool</span></div>
            <div className="Paragraph font-IBMsans font-bold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

            <div className="Header text-xl font-bold pt-6">React - <span className='text-purple'>JavaScript Library</span></div>
            <div className="Paragraph font-IBMsans font-bold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

            <div className="Header text-xl font-bold pt-6">Tailwind - <span className='text-purple'>CSS Framework</span></div>
            <div className="Paragraph font-IBMsans font-bold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

          </div>
        </div>

      <div className="pt-12">

        <div className="bg-green rounded-t-[20px] border-[2px] shadow-solid-primary py-2">
          <div className="text-2xl font-semibold flex justify-center">Github</div>
        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="center py-6 px-8 text-xl font-bold list-none">

            <ul>
              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/figma-plugin" className='text-xl'>React Figma Template </a>
                  <div className="SubHeader text-sm text-purple">React - Tailwind - Vite</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/HealthTech-Sql" className='text-xl'>HealthTech SQL</a>
                  <div className="SubHeader text-sm text-purple">SQL</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/RubyOnRails_SVG-Inline" className='text-xl'>Ruby On Rails Friends</a>
                  <div className="SubHeader text-sm text-purple">Ruby On Rails - SQLite - SVG Inline</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/RubyOnRailsFriendsApp" className='text-xl'>Ruby On Rails Devise Login</a>
                  <div className="SubHeader text-sm text-purple">Codemy Course</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/RubyOnRails-CompanyLayout" className='text-xl'>Ruby On Rails Company Layout</a>
                  <div className="SubHeader text-sm text-purple">Ruby On Rails - SVG Inline</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

            </ul>

            <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge?tab=repositories"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-2 mb-4 text-base">All Repositorys</button></a>

          </div>
        </div>

      </div>

    </div>
  )
}
export default Tool