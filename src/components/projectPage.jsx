import { useParams } from 'react-router-dom'
import images from './images'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectPage = () => {
  const { projectId } = useParams()

  const renderContent = () => {
    switch (projectId) {
      case 'cv-template':
        return (
          <div>
            This is the CV Template Page
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
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
        )
      case 'schedule-app':
        return (
          <div>
            This is the schedule app page
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
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
        )
      case 'pricing-toggle':
        return (
          <div>
            This is the pricing toggle{' '}
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
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
        )
      // Add more cases here for different projectIds
      default:
        return <div>Oops! there's nothing here... </div>
    }
  }

  return (
    <div>
      Project Page for {projectId}
      {renderContent()} {}
    </div>
  )
}

export default ProjectPage
