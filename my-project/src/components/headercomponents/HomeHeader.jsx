import { Mascot } from "./imports"

const HomeHeader = () => {
  return (
    <div>
      <div className="font-IBMmono tracking-tighter">
        <div className="flex justify-center text-6xl font-bold ">
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            G
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            E
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            O
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            R
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            G
          </div>
          <div className="pr-2 duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            E
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            C
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            L
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            A
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            R
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            I
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            D
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            G
          </div>
          <div className="duration-[400ms] hover:-translate-y-2 hover:scale-110 hover:text-green">
            E
          </div>
        </div>

        <div className="pt-2 text-center text-3xl font-bold text-purple">
          Neubrutalism Project
        </div>

        <div className="flex justify-center">
          <img
            src={Mascot}
            alt="Home"
            className="Icon w-[28rem] self-center pt-5"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
