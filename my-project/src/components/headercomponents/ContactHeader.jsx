import { Github, Linkedin } from './imports';
const ContactHeader = () => {

  return (
    <div className="flex justify-center">

      <div className="flex flex-col text-center">
        <div className="Circle rounded-full w-[15rem] h-[15rem] bg-purple m-auto"></div>
        <div className="text-4xl font-bold pt-3 tracking-tight">George Claridge</div>
        <div className="text-2xl font-bold text-purple pt-2">LETS TALK</div>
        <div>Email: glgclaridge@gmail.com</div>

        <div class="flex justify-center pt-2">
          <a target='_blank'rel='noopener noreferrer' href="https://github.com/GeorgeClaridge"><img src={Github} alt="Github" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
          <div className="px-2"></div>
          <a target='_blank'rel='noopener noreferrer' href="https://www.linkedin.com/in/george-claridge-6a5a1721b/"><img src={Linkedin} alt="Linkedin" className='Icon self-center w-10 hover:-translate-y-1 hover:scale-110 duration-300'/></a>
        </div>
        
      </div>

    </div>
  )
}

export default ContactHeader
