import './header.css';

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

            <div className="text text-sm font-bold font-IBMsans pt-3">Hey I’m George Claridge, a website developer located in Christchurch, New Zealand. I have just finished my diploma in IT Support and I'm currently looking for work. If you have any opportunities please contact me on Linkedin or on email at glgclaridge@gmail.com</div>
            <div className="text text-sm font-bold font-IBMsans pt-3">This website was made for me to learn about Neubrutalism website design and making a window that changes based on a user’s decision. In the future I want to build a website based on a PC’s Desktop that can change based on a user’s decisions. This could include a taskbar, background images and icon styles. This website is currently a work in progress and will be gaining new features as I learn.</div>
            <div className="text text-sm font-bold font-IBMsans pt-3">I became interested in Neubrutalism when looking at multiple website developer’s portfolios and noticing common themes that I found out were from the Neubrutalism style. I used these websites and designs as references and took elements I liked to create this website using Figma and React.</div>
            <div className="text text-sm font-bold font-IBMsans pt-3">To get the base template of the website I created a couple concepts using Figma’s figjam board to sketch the concepts. I then brought it into a design file and started developing it further by making decisions on color pallet, icons and responsive design. Once completing the design I built it using React with Vite, Tailwind for CSS and Github for version control. To host the website i'm using Hostinger which allows me to use tools that help me improve performance.</div>

          </div>
        </div>
      </div>  

    </div>
  )
}

export default Header
