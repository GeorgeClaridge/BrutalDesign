const SkillHeader = () => {

  return (
    <div>

      <div className="Header text-6xl font-bold flex justify-start">
        <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
          S
        </div>
        <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
          K
        </div>
        <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
          I
        </div>
        <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
          L
        </div>
        <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
          L
        </div>
        <div className='hover:-translate-y-2 duration-[400ms] hover:text-green hover:scale-110'>
          S
        </div>
      </div>

      <ul>
        <li className="pt-3">
          <div className="Header text text-2xl font-bold font-IBMsans">SQL: MySQL and SQLite</div>
          <div className="Example text-xl text-purple">Example: HealthTech SQL</div>
        </li>

        <li className="pt-3">
          <div className="Header text text-2xl font-bold font-IBMsans">React: Website and App Development</div>
          <div className="Example text-xl text-purple">Example: Figma Layout</div>
        </li>

        <li className="pt-3">
          <div className="Header text text-2xl font-bold font-IBMsans">Ruby On Rails: Front end and Crud</div>
          <div className="Example text-xl text-purple">Example: Devise Login</div>
        </li>

        <li className="pt-3">
          <div className="Header text text-2xl font-bold font-IBMsans">Figma: Design and Prototypes</div>
          <div className="Example text-xl text-purple">Example: BlankTemplate, Neubrutalism</div>
        </li>

        <li className="pt-3">
          <div className="Header text text-2xl font-bold font-IBMsans">IT Support: Communication and Helpdesk</div>
        </li>
      </ul>

      <div className="Line border-b-[2px] pt-6"></div>
    </div>
  )
}

export default SkillHeader
