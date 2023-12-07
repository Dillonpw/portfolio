import { Link } from 'react-router-dom'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '/assets/logo.svg'

export default function Header() {
  const scrollAbout = () => {
    window.scrollTo({
      top: 90,
      behavior: 'smooth',
    })
  }

  const scrollTech = (e) => {
    e.preventDefault()
    const techElement = document.getElementById('tech')
    if (techElement) {
      const techPos = techElement.offsetTop
      window.scrollTo({
        top: techPos,
        behavior: 'smooth',
      })
    }
  }

  const scrollProjects = (e) => {
    e.preventDefault()
    const projectElement = document.getElementById('projects')
    if (projectElement) {
      const projectPos =
        projectElement.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: projectPos,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
        <Link to="/" id="logo" className="justify-start px-2">
          <img className="hover:scale-105" src={logo} alt="Logo" />
        </Link>
        <div className="items-end justify-center px-2 text-xl">
          <a
            className="m-2 hover:underline"
            href="#about"
            onClick={scrollAbout}
          >
            About
          </a>
          <a className="m-2 hover:underline" href="#tech" onClick={scrollTech}>
            Tech
          </a>
          <a
            className="m-2 hover:underline "
            href="#projects"
            onClick={scrollProjects}
          >
            Projects
          </a>
        </div>
      </div>
      <div className="mx-8 mt-10 flex flex-col items-center justify-center pt-10 md:flex-row">
        <div className=" flex w-full flex-col px-6 md:w-1/2">
          <h1 id="home" className="fade-in px-5 pb-2 text-5xl">
            Dillon Walsh
          </h1>
          <h2 className="fade-in-2 px-5 pb-2 text-2xl opacity-60">
            Full Stack Web Developer and Designer
          </h2>
          <div
            id="links"
            className="fade-in-3 ml-1 px-5 pt-4 text-cyan-100 opacity-60"
          >
            <a
              id="githubLink"
              href="https://github.com/Dillonpw/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Github"
            >
              <FontAwesomeIcon
                className="mr-8 h-8 w-8 hover:scale-110"
                icon={faGithub}
              />
            </a>
            <a
              id="linkedinLnk"
              href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Linkedin"
            >
              <FontAwesomeIcon
                className=" h-8 w-8 hover:scale-110"
                icon={faLinkedinIn}
              />
            </a>
          </div>
        </div>

        <div className="fade-in-4 mt-40 flex w-full flex-col items-center px-6 md:w-1/2">
          <p className="px-6 text-xl opacity-60">
            After graduating from College in 2019, I took a full time position
            as a 911 emergency dispatcher. Though the job could be demanding, it
            also afforded me plenty of downtime which I used to learn web
            development using free resources like freeCodeCamp and The Odin
            Project. Since then I have been designing, building and continuing
            to learn. Now I contribute to The Odin Project documentation and
            other open source projects when I can, while building personal
            projects and client projects in my spare time.
          </p>
          <button className="m-4 w-fit rounded-2xl p-3 outline outline-cyan-100 hover:scale-105 active:bg-cyan-200 active:text-slate-900 active:outline-none">
            <Link to="/about" className="">
              More
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
