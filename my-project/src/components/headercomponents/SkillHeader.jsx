const SkillHeader = () => {

  return (
    <div>
      <div className="PlaceHolder"></div>
      
      <div className="flex justify-between">
          <div className="w-[32%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
              <div className="text-2xl font-semibold">Front-End</div>
            </div>

            <div className="rounded-b-[20px] border-[2px] border-t-0 p-5 h-[90%]">

              <div className="">
                <div className="text-xl font-bold">- React & Ruby On Rails</div>
              </div>

              <div className="pt-3">
                <div className="text-xl font-bold">- Tailwind & Bootstrap</div>
              </div>

              <div className="pt-3">
                <div className="text-xl font-bold">- JavaScript & TypeScript</div>
              </div>

              <div className="pt-3">
                <div className="text-xl font-bold">- Git Version Control</div>
              </div>

            </div>
          </div>

          <div className="w-[32%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
                <div className="text-2xl font-semibold">Back-End</div>
              </div>

              <div className="rounded-b-[20px] border-[2px] border-t-0 p-5 h-[90%]">

                <div className="">
                  <div className="text-xl font-bold">- Ruby On Rails CRUD</div>
                </div>

                <div className="pt-3">
                  <div className="text-xl font-bold">- Data Structures</div>
                </div>

                <div className="pt-3">
                  <div className="text-xl font-bold">- APIs</div>
                </div>

                <div className="pt-3">
                  <div className="text-xl font-bold">- Networking</div>
                </div>

              </div>
          </div>

          <div className="w-[32%]">
            <div className="bg-purple rounded-t-[20px] border-[2px] flex flex-row justify-center py-2">
                <div className="text-2xl font-semibold">Design</div>
              </div>

              <div className="rounded-b-[20px] border-[2px] border-t-0 p-5 h-[90%]">

                <div className="">
                  <div className="text-xl font-bold">- Figma</div>
                </div>

                <div className="pt-3">
                  <div className="text-xl font-bold">- Responsive Web Design</div>
                </div>

                <div className="pt-3">
                  <div className="text-xl font-bold">- Graphic Design</div>
                </div>
                
                <div className="pt-3">
                  <div className="text-xl font-bold">- Typography</div>
                </div>

              </div>
          </div>

      </div>

    </div>
  )
}

export default SkillHeader
