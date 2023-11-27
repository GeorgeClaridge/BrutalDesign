import { DesignDev, BackDev, FrontDev } from './imports';

const Skills = () => {
  return (
  
    <div className="pt-12 pb-4">

      <div className="bg-green rounded-t-[20px] border-[2px] shadow-solid-primary py-2">
        <div className="text-2xl font-bold font-IBMmono flex justify-center">Project</div>
      </div>

      <div className="bg-white rounded-b-[20px] border-[2px] border-t-[0px] shadow-solid-primary p-5">
      
        <div className="Content p-4 grid grid-cols-1 gap-20">
          <div className="Container">
            <div className="Header text-2xl font-bold font-IBMmono text-center">Front-End</div>
            <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Development</div>
            <img src={FrontDev} alt="" className='w-[50%] mx-auto'/>
            <div className="List flex justify-center">
              <ul className='text-xl font-bold font-IBMmono list-disc list-inside pt-8'>
                <li>HTML / CSS</li>
                <li>Tailwind / Bootstrap</li>
                <li>React / RubyOnRails</li>
              </ul>
            </div>
          </div>

          <div className="Container">
            <div className="Header text-2xl font-bold font-IBMmono text-center">Back-End</div>
            <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Development</div>
            <img src={BackDev} alt="" className='w-[50%] mx-auto'/>
            <div className="List flex justify-center">
              <ul className='text-xl font-bold font-IBMmono list-disc list-inside pt-8'>
                <li>Github</li>
                <li>APIs</li>
                <li>SQL Databases</li>
                <li>CISCO Networking</li>
              </ul>
            </div>
          </div>

          <div className="Container">
            <div className="Header text-2xl font-bold font-IBMmono text-center">UI / UX</div>
            <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Design</div>
            <img src={DesignDev} alt="" className='w-[50%] mx-auto'/>
            <div className="List flex justify-center">
              <ul className='text-xl font-bold font-IBMmono list-disc list-inside pt-8'>
                <li>Figma</li>
                <li>Vector Illustrations</li>
                <li>Responsive Design</li>
                <li>User Experience</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Skills
