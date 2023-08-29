import './info.css';
import {Github, Linkedin} from './imports'

const Info = () => {
  return (
    <div className="pt-12">

        <div className="bg-purple rounded-t-[20px] border-[2px] shadow-solid-primary py-2">
          <div className="text-2xl font-semibold flex justify-center">SKILLS</div>
        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content p-4">

            <div className="Header text-xl font-bold">Figma - <span className='text-purple'>Design Tool</span></div>
            <div className="Paragraph font-IBMsans font-bold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

            <div className="Header text-xl font-bold pt-6">React - <span className='text-purple'>JavaScript Library</span></div>
            <div className="Paragraph font-IBMsans font-bold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

            <div className="Header text-xl font-bold pt-6">Tailwind - <span className='text-purple'>CSS Framework</span></div>
            <div className="Paragraph font-IBMsans font-bold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </div>

          </div>
        </div>

      <div className="pt-12 pb-4">

        <div className="bg-green rounded-t-[20px] border-[2px] shadow-solid-primary py-2">
          <div className="text-2xl font-semibold flex justify-center">CONTACT</div>
        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content p-4 flex flex-col text-center">

            <div className="Picture rounded-full w-[10rem] h-[10rem] bg-purple self-center"></div>

            <div className="Header text-3xl font-bold pt-3">GEORGE CLARIDGE</div>
            <div className="SubHeader text-purple text-xl font-bold">LETS TALK</div>
            <div className="Email">Email: glgclaridge@gmail.com</div>

            <div className="Links flex justify-center pt-2">
              <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/BrutalDesign"><img src={Github} alt="Github" className='self-center w-10 mr-2'/></a>
              <a target='_blank'rel='noopener noreferrer' href="https://www.linkedin.com/in/george-claridge-6a5a1721b/"><img src={Linkedin} alt="Linkedin" className='self-center w-10 mr-2'/></a>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
export default Info
