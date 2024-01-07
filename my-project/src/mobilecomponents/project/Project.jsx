import { Wubble, Jumpstart, Github, Figma , Asymmetric, Guide } from './imports';

const Project = () => {
  return (
  
    <div className="pt-12 pb-4">

      <div className="bg-purple rounded-t-[20px] border-[2px] shadow-solid-primary py-2">
        <div className="text-2xl font-bold font-IBMmono flex justify-center">Project</div>
      </div>

      <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary">
        <div className="Content p-4 grid grid-cols-1 gap-12">

        <div className="Container">
          <a target='_blank'rel='noopener noreferrer' href="https://georgeclaridge.github.io/FakeCompany/">
            <div className="h-[10rem] flex justify-items-center">
              <img src={Wubble} alt="" className='w-40 mx-auto'/>
            </div>
            <div className="Header text-2xl font-bold font-IBMmono text-center hover:underline cursor-pointer">Wubble - Software</div>
          </a>
          <div className="SubHeader text-base font-bold font-IBMmono text-purple text-center">React - Tailwind - Vite</div> 
          <div class="flex justify-center pt-2">
            <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/FakeCompany"><img src={Github} alt="Github" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
            <div className="px-2"></div>
            <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/yUf60Lk7wxET028cQ6ukCS/Fake-Company?type=design&node-id=0%3A1&mode=design&t=Pf2YGu5ct6nPxVTN-1"><img src={Figma} alt="Figma" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          </div> 
          
        </div>

        <div className="Container">
          <a target='_blank'rel='noopener noreferrer' href="https://georgeclaridge.github.io/JumpStart/">
            <div className="h-[10rem]">
              <img src={Jumpstart} alt="" className='w-40 mx-auto'/>
            </div>
            <div className="Header text-2xl font-bold font-IBMmono text-center hover:underline cursor-pointer">Jumpstart - Productivity</div>
          </a>
          <div className="SubHeader text-base font-bold font-IBMmono text-purple text-center">React - Tailwind - Vite</div> 
          <div class="flex justify-center pt-2">
            <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/JumpStart"><img src={Github} alt="Github" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
            <div className="px-2"></div>
            <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/KBekInHW5UhFRExjtSroug/Untitled?type=design&mode=design&t=T3XLZyteNJLgl64D-0"><img src={Figma} alt="Figma" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          </div> 
        </div>

        <div className="Container">
          <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/JnuybEp3eDS5XqzJX9X84A/Asymmetric?type=design&node-id=0%3A1&mode=design&t=rZIlnhTMN6iHfpxp-1">
          <div className="h-[10rem]">
            <img src={Asymmetric} alt="" className='w-32 mx-auto'/>
          </div>
          <div className="Header text-2xl font-bold font-IBMmono text-center hover:underline cursor-pointer">Asymmetric</div>
          </a>
          <div className="SubHeader text-base font-bold font-IBMmono text-purple text-center">Figma Design - React WIP</div> 
          <div class="flex justify-center pt-2">
            <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/JnuybEp3eDS5XqzJX9X84A/Asymmetric?type=design&node-id=0%3A1&mode=design&t=rZIlnhTMN6iHfpxp-1"><img src={Figma} alt="Figma" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          </div> 
        </div>

      </div>

    </div>

    </div>

  )
}

export default Project
