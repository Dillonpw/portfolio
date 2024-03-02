import { Link } from 'react-router-dom'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import logo from '/assets/logo.svg'

const Header = () => {
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
    <section>
      <nav className="mx-4 flex flex-row items-center justify-between p-6">
        <Link to="/" id="logo" className="justify-start px-2">
          <img className="hover:scale-105" src={logo} alt="Logo" />
        </Link>
        <div className="items-end justify-center px-2 text-2xl">
          <a
            className="m-2 hover:underline"
            href="#about"
            onClick={scrollAbout}
          >
            About
          </a>
          <a
            className="m-2 hover:underline "
            href="#projects"
            onClick={scrollProjects}
          >
            Projects
          </a>
          <a className="m-2 hover:underline" href="#tech" onClick={scrollTech}>
            Tech
          </a>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="mx-8 mt-10 flex flex-col items-center justify-center md:flex-row"
      >
        <div className="mt-20 flex w-full flex-col gap-4 px-6 md:w-1/2">
          <h1 id="home" className=" px-5 pb-2 text-5xl">
            Dillon Walsh
          </h1>
          <h2 className="fade-in-2 px-5 pb-2 text-3xl opacity-60">
            Full Stack Web Developer
          </h2>
          <h3 className="fade-in-2 px-5 pb-2 text-xl opacity-60">
            If I'm not online I'm probably walking my dogs
          </h3>

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

        <div className="fade-in-4 mt-30 flex w-full flex-col items-center px-6 md:w-1/2">
          <p className="my-10 px-6 text-xl opacity-60">
            In 2019, after completing my college education, I embarked on a
            career as a 911 emergency dispatcher. While this role was
            challenging and demanding, it also afforded me the time to explore
            my budding interest in web development. I utilized a range of free
            resources, including freeCodeCamp, The Odin Project, and various
            official documentation, to self-educate and hone my skills while
            working a full time job. Recently, my focus has shifted towards
            contributing to open source learning projects and their
            documentation, and developing personal projects, as well as
            providing web development services for some really great people.
          </p>
          {/* <a className="px-6 py-4 bg-cyan-200 rounded-xl border-2 border-cyan-200 text-slate-800  hover:bg-slate-800 hover:text-cyan-200" href="/about">More</a> */}
   
        </div>
      </motion.div>
    </section>
  )
}

export default Header
