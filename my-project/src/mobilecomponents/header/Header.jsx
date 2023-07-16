import './header.css';
import {Min, Full, Close} from './imports'

const Header = () => {
  return (
    <div className="">

      <div className="bg-purple rounded-t-[20px] border-[2px] shadow-solid-primary py-2">

        <div className="text-2xl font-semibold flex justify-center">WARNING</div>

        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
        <div className="Content p-4">

          <div className="text text-sm font-bold font-IBMsans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

        </div>
      </div>

      <div className='pt-12'>
        <div className="bg-green rounded-t-[20px] border-[2px] shadow-solid-primary py-2">

          <div className="text-2xl font-semibold flex justify-center">HOME</div>

        </div>

        <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
          <div className="Content p-4">
            <div className="HeaderContainer">
              <div className="Header text-3xl font-bold">GEORGE CLARIDGE</div>
              <div className="SubHeader text-purple text-xl font-bold">Neubrutalism</div>
            </div>

            <div className="text text-sm font-bold font-IBMsans pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="text text-sm font-bold font-IBMsans pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

          </div>
        </div>
      </div>  

    </div>
  )
}

export default Header
