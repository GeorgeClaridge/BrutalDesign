import './header.css';
import {Mascot,} from './imports';

const Header = () => {
  return (
    <div className="">

      <div className="bg-purple rounded-t-[20px] border-[2px] shadow-solid-primary py-2">

        <div className="text-2xl font-semibold flex justify-center">WARNING</div>

        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
        <div className="Content p-4">

          <div className="text text-base font-semibold font-IBMsans">There are more components available on the desktop version of this website. This includes React functions, Hover effects and information about the website and me. This website is still a work in progress and will be getting better as time goes on.</div>

        </div>
      </div>

      <div className='pt-12'>
        <div className="bg-green rounded-t-[20px] border-[2px] shadow-solid-primary py-2">

          <div className="text-2xl font-semibold flex justify-center">HOME</div>

        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary p-5">

          <div className="text-green text-5xl font-bold text-center">George Claridge</div>
          <div className="text-purple text-3xl font-bold pt-2 text-center">Neubrutalism Project</div>

          <div className="flex justify-center">
            <img src={Mascot} alt="Home" className='Icon self-center w-[28rem] pt-5'/>
          </div>

        </div>
      </div>  

    </div>
  )
}

export default Header
