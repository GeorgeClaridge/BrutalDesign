import { Wubble, Jumpstart, Github, Figma , Asymmetric, Guide } from './imports';
const ProjectHeader = () => {

  return (
    <div>

      <div className="PlaceHolder"></div>
      
      <div className="grid grid-cols-2 gap-12 xl:grid-cols-3">
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
          <a target='_blank'rel='noopener noreferrer' href="https://georgeclaridge.github.io/FakeCompany/">
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

        <div className="Container">
          <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/CkWC55aypa2m68gPPPPMro/Untitled?type=design&node-id=0%3A1&mode=design&t=8OPTN0wAGQL2ZKXF-1">
          <div className="h-[10rem]">
            <img src={Guide} alt="" className='h-40 mx-auto'/>
          </div>
          <div className="Header text-2xl font-bold font-IBMmono text-center hover:underline cursor-pointer">Guide</div>
          </a>
          <div className="SubHeader text-base font-bold font-IBMmono text-purple text-center">Figma Design - React WIP</div> 
          <div class="flex justify-center pt-2">
            <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/CkWC55aypa2m68gPPPPMro/Untitled?type=design&mode=design&t=iiALTUcyJtCM2h6H-1"><img src={Figma} alt="Figma" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          </div> 
        </div>

        <div className="Container">
          <div className="h-[10rem]">
            <img src={Jumpstart} alt="" className='w-40 mx-auto'/>
          </div>
          <div className="Header text-2xl font-bold font-IBMmono text-center hover:underline cursor-pointer">Placeholder</div>
          <div className="SubHeader text-base font-bold font-IBMmono text-purple text-center">Placeholder</div> 
          <div class="flex justify-center pt-2">
            <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/FakeCompany"><img src={Github} alt="Github" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
            <div className="px-2"></div>
            <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/yUf60Lk7wxET028cQ6ukCS/Fake-Company?type=design&node-id=0%3A1&mode=design&t=Pf2YGu5ct6nPxVTN-1"><img src={Figma} alt="Figma" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          </div> 
        </div>

        <div className="Container">
          <div className="h-[10rem]">
            <img src={Jumpstart} alt="" className='w-40 mx-auto'/>
          </div>
          <div className="Header text-2xl font-bold font-IBMmono text-center hover:underline cursor-pointer">Placeholder</div>
          <div className="SubHeader text-base font-bold font-IBMmono text-purple text-center">Placeholder</div> 
          <div class="flex justify-center pt-2">
            <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge/FakeCompany"><img src={Github} alt="Github" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
            <div className="px-2"></div>
            <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/yUf60Lk7wxET028cQ6ukCS/Fake-Company?type=design&node-id=0%3A1&mode=design&t=Pf2YGu5ct6nPxVTN-1"><img src={Figma} alt="Figma" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          </div> 
        </div>
      </div>

    </div>
  )
}


export default ProjectHeader
