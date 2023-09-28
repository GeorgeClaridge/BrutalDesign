import './tool.css';

const Tool = () => {
  return (
    <div className="Contatienr flex flex-row justify-between pt-12">

      <div className="w-[60%] pr-6">

        <div className="bg-green rounded-t-[20px] border-[2px] flex flex-row justify-center shadow-solid-primary py-2">

          <div className="text-2xl font-semibold">What This Website Uses</div>

        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content py-6 px-8">

            <div className="Header text-3xl font-semibold">Figma - <span className='text-purple'>Design Tool</span></div>
            <div className="Paragraph font-IBMsans font-bold">This website was ideated using Figma starting with a concept and developed over time with neubrutalism in mind. Once I had a base design I began to create images and content for the website. All of this can be found in the Figma file.</div>

            <div className="Header text-3xl font-semibold pt-6">React - <span className='text-purple'>JavaScript Library</span></div>
            <div className="Paragraph font-IBMsans font-bold">I choose React as my javascript library for this project due to wanting to learn more about React’s hooks as I have mainly used Ruby On Rails in the past. I wanted to keep this website as an educational project.</div>

            <div className="Header text-3xl font-semibold pt-6">Tailwind - <span className='text-purple'>CSS Framework</span></div>
            <div className="Paragraph font-IBMsans font-bold">I picked Tailwind as my css framework due to it being highly customisable and allowing me to use PurgeCss which keeps my file sizes and load time small. This allows me to create website with less restrictions in the future.</div>

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
              <li className="flex justify-between pb-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/figma-plugin" className='text-xl hover:underline cursor-pointer'>React Figma Template </a>
                  <div className="SubHeader text-base text-purple">React - Tailwind - Vite</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/HealthTech-Sql" className='text-xl hover:underline cursor-pointer'>HealthTech SQL</a>
                  <div className="SubHeader text-base text-purple">SQL</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/RubyOnRails_SVG-Inline" className='text-xl hover:underline cursor-pointer'>Ruby On Rails Friends</a>
                  <div className="SubHeader text-base text-purple">Ruby On Rails - SQLite - SVG Inline</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/RubyOnRailsFriendsApp" className='text-xl hover:underline cursor-pointer'>Ruby On Rails Devise Login</a>
                  <div className="SubHeader text-base text-purple">Codemy Course</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

              <li className="flex justify-between py-2">
                <div className="Header">
                  <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/RubyOnRails-CompanyLayout" className='text-xl hover:underline cursor-pointer'>Ruby On Rails Company Layout</a>
                  <div className="SubHeader text-base text-purple">Ruby On Rails - SVG Inline</div>
                </div>
                <div className="Icon">ICON</div>
              </li>

            </ul>

            <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge?tab=repositories"><button className="rounded-lg bg-green border-[2px] shadow-solid-primary px-3 py-2 mt-2 mb-4 text-base hover:-translate-y-1 hover:scale-110 duration-300">All Repositories</button></a>

          </div>
        </div>

      </div>

    </div>
  )
}
export default Tool
