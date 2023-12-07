import logo from '/assets/logo.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
      <Link to="/" id="logo" className="justify-start px-2">
        <img className="hover:scale-105" src={logo} alt="Logo" />
      </Link>
    </main>
  )
}

export default About
