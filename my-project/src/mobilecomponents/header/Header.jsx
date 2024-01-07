import "./header.css"
import { Mascot } from "./imports"

const Header = () => {
  return (
    <div className="">
      <div className="shadow-solid-primary rounded-t-[20px] border-[2px] bg-purple py-2">
        <div className="flex justify-center font-IBMmono text-2xl font-bold">
          WARNING
        </div>
      </div>

      <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white">
        <div className="Content p-4">
          <div className="pt-1 font-IBMsans text-base leading-8">
            There are more components available on the desktop version of this
            website. This includes React functions, Hover effects and
            information about the website and me. This website is still a work
            in progress and will be getting better as time goes on.
          </div>
        </div>
      </div>

      <div className="pt-12">
        <div className="shadow-solid-primary rounded-t-[20px] border-[2px] bg-green py-2">
          <div className="flex justify-center font-IBMmono text-2xl font-bold">
            HOME
          </div>
        </div>

        <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white p-5">
          <div className="text-center font-IBMmono text-4xl font-bold tracking-tighter text-black">
            George Claridge
          </div>
          <div className="pt-2 text-center text-xl font-bold text-purple">
            Neubrutalism Project
          </div>

          <div className="flex justify-center">
            <img
              src={Mascot}
              alt="Home"
              className="Icon w-[28rem] self-center p-5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
