import {Mascot,} from './imports';

const HomeHeader = () => {

  return (
    <div>
      <div className="font-IBMmono tracking-tighter">

        <div className="text-6xl font-bold flex justify-center ">
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            G
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            E
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            O
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            R
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            G
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110 pr-2'>
            E
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            C
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            L
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            A
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            R
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            I
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            D
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            G
          </div>
          <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
            E
          </div>
        </div>

        <div className="text-purple text-3xl font-bold pt-2 text-center">Neubrutalism Project</div>

        <div className="flex justify-center">
          <img src={Mascot} alt="Home" className='Icon self-center w-[24rem] pt-5'/>
        </div>

      </div>

      

    </div>
  )
}

export default HomeHeader
