import { Link, useParams } from 'react-router-dom'
import images from './images'
import logo from '/assets/logo.svg'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectPage = () => {
  const { projectId } = useParams()

  const renderContent = () => {
    const project = images.find((image) => image.id === projectId)
    switch (projectId) {
      case 'cv-template':
        return (
          <main>
            <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
              <Link to="/" id="logo" className="justify-start px-2">
                <img className="hover:scale-105" src={logo} alt="Logo" />
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="w-100 h-100 items-center justify-center rounded-2xl"
                src={project.src}
                alt={project.title}
              />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <a
              id="github link cv-template"
              href="https://github.com/Dillonpw/cv-template"
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
              className="mr-8 h-8 w-8 hover:scale-110"
              id="live preview link"
              href="https://cv-template-navy.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to live preview"
            >
              <FontAwesomeIcon
                className="mr-8 h-8 w-8 hover:scale-110"
                icon={faUpRightFromSquare}
              />
            </a>
          </main>
        )
      case 'schedule-app':
        return (
          <main className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
            <Link to="/" id="logo" className="justify-start px-2">
              <img className="hover:scale-105" src={logo} alt="Logo" />
            </Link>
            <div className="flex items-center justify-center">
              <img
                className="w-100 h-100 items-center justify-center rounded-2xl"
                src={project.src}
                alt={project.title}
              />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              id="github link schedule-app"
              href="https://github.com/Dillonpw/schedule-app"
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
              className="mr-8 h-8 w-8 hover:scale-110"
              id="live preview link schedule-app"
              href="https://schedule-app-mauve.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to live preview schedule-app"
            >
              <FontAwesomeIcon
                className="mr-8 h-8 w-8 hover:scale-110"
                icon={faUpRightFromSquare}
              />
            </a>
          </main>
        )
      case 'pricing-toggle':
        return (
          <main className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
            <Link to="/" id="logo" className="justify-start px-2">
              <img className="hover:scale-105" src={logo} alt="Logo" />
            </Link>
            <div className="flex items-center justify-center">
              <img
                className="w-100 h-100 items-center justify-center rounded-2xl"
                src={project.src}
                alt={project.title}
              />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              id="github link pricing-toggle"
              href="https://github.com/Dillonpw/pricing-toggle"
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
              className="mr-8 h-8 w-8 hover:scale-110"
              id="live preview link pricing toggle"
              href="https://dillonpw.github.io/pricing-toggle/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to live preview pricing-toggle"
            >
              <FontAwesomeIcon
                className="mr-8 h-8 w-8 hover:scale-110"
                icon={faUpRightFromSquare}
              />
            </a>
          </main>
        )
      // Add more cases here for different projectIds
      default:
        return <div>Oops! there's nothing here... </div>
    }
  }

  return (
    <div>
      {renderContent()} {}
    </div>
  )
}

export default ProjectPage
