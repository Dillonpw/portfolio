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
      case 'Dispatcher Cheat Sheet':
      case 'pricing-toggle':
        return (
          <main>
            <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
              <Link to="/" id="logo" className="justify-start px-2">
                <img className="hover:scale-105" src={logo} alt="Logo" />
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center px-4">
              <img
                className="w-100 h-100 items-center justify-center rounded-2xl"
                src={project.src}
                alt={project.title}
              />
              <section className="justify-items-center">
                <h2 className="mb-4 text-2xl font-bold">{project.title}</h2>
                
              </section>
              <h3 className="self-start mt-8 text-xl font-bold">About</h3>
              <p className="px-4 text-left opacity-60">
                {project.description}
              </p>
              <h3 className="self-start mt-8 text-xl font-bold">Challenges</h3>
              <p className="px-4 text-left opacity-60">
                {project.challenge}
              </p>
            </div>
            <div className=" flex justify-center pb-6">
                  <a
                    id={`github link ${projectId}`}
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="redirect to Github"
                  >
                    <FontAwesomeIcon
                      className="mx-4 h-8 w-8 hover:scale-110"
                      icon={faGithub}
                    />
                  </a>
                  <a
                    className="mx-4 h-8 w-8 hover:scale-110"
                    id={`live preview link ${projectId}`}
                    href={project.livePreviewLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="redirect to live preview"
                  >
                    <FontAwesomeIcon
                      className="h-8 w-8 hover:scale-110"
                      icon={faUpRightFromSquare}
                    />
                  </a>
                </div>
          </main>
        )

      // Add more cases here for different projectIds
      default:
        return <div>Oops! there's nothing here... </div>
    }
  }

  return <div>{renderContent()}</div>
}

export default ProjectPage
