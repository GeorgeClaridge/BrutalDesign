import { Github, Linkedin } from "./imports"
const TestHeader = () => {
  return (
    <div className="">
      <div className="Placeholder"></div>

      <div className="Navbar flex justify-between">
        <div className="Header Container">
          <div className="Header font-IBMmono text-4xl font-bold">
            George Claridge
          </div>
          <div className="Subheader font-IBMmono text-2xl font-bold text-purple">
            About Me
          </div>
        </div>
        <div className="Buttons flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GeorgeClaridge"
          >
            <img
              src={Github}
              alt="Github"
              className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>
          <div className="px-2"></div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/george-claridge-6a5a1721b/"
          >
            <img
              src={Linkedin}
              alt="Linkedin"
              className="Icon w-10 self-center duration-300 hover:-translate-y-1 hover:scale-110"
            />
          </a>
        </div>
      </div>

      <div className="paragraph pt-4 font-IBMsans text-lg leading-8">
        Hey I’m George Claridge, a website developer located in Christchurch,
        New Zealand. I have just finished my diploma in IT Support and I'm
        currently looking for work. If you have any opportunities please contact
        me on Linkedin or on my email at glgclaridge@gmail.com
      </div>

      <div className="paragraph pt-2 font-IBMsans text-lg leading-8">
        This website was made for me to learn about Neubrutalism website design
        and making a window that changes based on a user’s decision. In the
        future I want to build a website based on a PC’s Desktop that can change
        based on a user’s decisions. This could include a taskbar, background
        images and icon styles. This website is currently a work in progress and
        will be gaining new features as I learn.
      </div>

      <div className="paragraph pt-2 font-IBMsans text-lg leading-8">
        I became interested in Neubrutalism when looking at multiple website
        developer’s portfolios and noticing common themes that I found out were
        from the Neubrutalism style. I used these websites and designs as
        references and took elements I liked to create this website using Figma,
        React and Tailwind.
      </div>
    </div>
  )
}

export default TestHeader
