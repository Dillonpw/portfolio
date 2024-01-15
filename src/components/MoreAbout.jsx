import logo from '/assets/logo.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
      <Link to="/" id="logo" className="justify-start px-2">
        <img className="hover:scale-105" src={logo} alt="Logo" />
      </Link>
      <h1>This page is under construction... wait how did you get here?</h1>
    </main>
  )
}

export default About
