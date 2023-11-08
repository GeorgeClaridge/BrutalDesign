import { DesignDev, BackDev, FrontDev } from './imports';
const SkillHeader = () => {

  return (
    <div>

      <div className="PlaceHolder"></div>
      
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
        <div className="Container">
          <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Front-End Development</div>
          <img src={FrontDev} alt="" className='w-[50%] mx-auto'/>
          <ul className='text-xl font-bold font-IBMmono list-disc list-inside text-center pt-4'>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>

        <div className="Container">
          <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Back-End Development</div>
          <img src={BackDev} alt="" className='w-[50%] mx-auto'/>
          <ul className='text-xl font-bold font-IBMmono list-disc list-inside text-center pt-4'>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>

        <div className="Container">
          <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">UI UX Design</div>
          <img src={DesignDev} alt="" className='w-[50%] mx-auto'/>
          <ul className='text-xl font-bold font-IBMmono list-disc list-inside text-center pt-4'>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SkillHeader
