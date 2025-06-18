import { DesignDev, BackDev, FrontDev } from "./imports"

const Skills = () => {
  return (
    <div className="pb-4 pt-12">
      <div className="shadow-solid-primary rounded-t-[20px] border-[2px] bg-green py-2">
        <div className="flex justify-center font-IBMmono text-2xl font-bold">
          Skills
        </div>
      </div>

      <div className="shadow-solid-primary rounded-b-[20px] border-[2px] border-t-[0px] bg-white p-5">
        <div className="Content grid grid-cols-1 gap-20 p-4">
          <div className="Container">
            <div className="Header text-center font-IBMmono text-2xl font-bold">
              Front-End
            </div>
            <div className="Header pb-4 text-center font-IBMmono text-2xl font-bold">
              Development
            </div>
            <img src={FrontDev} alt="" className="mx-auto w-[50%]" />
            <div className="List flex justify-center">
              <ul className="list-inside list-disc pt-8 font-IBMmono text-xl font-bold">
                <li>HTML / CSS</li>
                <li>Tailwind</li>
                <li>Javascript Frameworks</li>
              </ul>
            </div>
          </div>

          <div className="Container">
            <div className="Header text-center font-IBMmono text-2xl font-bold">
              Back-End
            </div>
            <div className="Header pb-4 text-center font-IBMmono text-2xl font-bold">
              Development
            </div>
            <img src={BackDev} alt="" className="mx-auto w-[50%]" />
            <div className="List flex justify-center">
              <ul className="list-inside list-disc pt-8 font-IBMmono text-xl font-bold">
                <li>Git / Github</li>
                <li>APIs</li>
                <li>SQL Databases</li>
                <li>Supabase / Firebase</li>
              </ul>
            </div>
          </div>

          <div className="Container">
            <div className="Header text-center font-IBMmono text-2xl font-bold">
              UI / UX
            </div>
            <div className="Header pb-4 text-center font-IBMmono text-2xl font-bold">
              Design
            </div>
            <img src={DesignDev} alt="" className="mx-auto w-[50%]" />
            <div className="List flex justify-center">
              <ul className="list-inside list-disc pt-8 font-IBMmono text-xl font-bold">
                <li>Figma / Adobe</li>
                <li>Framer / Wordpress</li>
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
