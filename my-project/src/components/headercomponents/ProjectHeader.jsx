import { Wubble, Jumpstart } from './imports';
const ProjectHeader = () => {

  return (
    <div>

      <div className="PlaceHolder"></div>
      
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
        <div className="Container">
          <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Wubble - Software</div>
          <img src={Wubble} alt="" className='w-40 mx-auto'/>
        </div>

        <div className="Container">
          <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Jumpstart - Productivity</div>
          <img src={Jumpstart} alt="" className='w-40 mx-auto'/>

        </div>

        <div className="Container">
          <div className="Header text-2xl font-bold font-IBMmono text-center pb-4">Placeholder</div>
          <img src={Jumpstart} alt="" className='w-[50%] mx-auto'/>
        </div>
      </div>

    </div>
  )
}


export default ProjectHeader
