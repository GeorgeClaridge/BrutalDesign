import { MascotAngry } from "./imports"
const RudeHeader = () => {
  return (
    <div>
      <div className="PlaceHolder"></div>

      <div className="flex justify-center">
        <img
          src={MascotAngry}
          alt="MascotAngry"
          className="w-[24rem] self-center"
        />
      </div>
    </div>
  )
}

export default RudeHeader
