import { DesignDev, BackDev, FrontDev } from './imports';
const SkillHeader = () => {

  return (
    <div className=''>

      <div className="PlaceHolder"></div>
      
      <div className="grid grid-cols-2 gap-12 xl:grid-cols-3">
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
  )
}

export default SkillHeader
