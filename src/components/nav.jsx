import ThemeToggle from './theme.jsx'
import logo from '/assets/logo.svg'
import { Link } from 'react-router-dom'


const NavBar = () => {
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
    <nav className="fixed top-0 z-50 flex w-full flex-row items-center justify-between rounded-b-md bg-emerald-700 p-4 text-white dark:bg-slate-900">
      <Link to="/" id="logo" className="justify-start px-2">
        <img className="hover:scale-105" src={logo} alt="Logo" />
      </Link>
      <div className="justify-center px-2 text-xl">
        <a className="m-2 hover:underline" href="#about" onClick={scrollAbout}>
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

      <ThemeToggle />
    </nav>
  )
}
export default NavBar
