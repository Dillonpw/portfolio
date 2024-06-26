import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import images from './Images'
import ThemeToggle from './theme'
import { motion } from 'framer-motion'
import logo from '/assets/logo.svg'
import Footer from './Footer'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectPage = () => {
  const { projectId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  const renderContent = () => {
    const project = images.find((image) => image.id === projectId)

    switch (projectId) {
      case 'dispatcher-cheat-sheet':
      case 'ecommerce-site':
      case 'pomodoro-timer-app':
        return (
          <motion.main
            className="bg-gradient-to-br from-gray-300 to-emerald-400 text-slate-900 dark:bg-gradient-to-br dark:from-sky-950 dark:to-slate-900 dark:text-cyan-200"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
              <Link to="/" id="logo" className="justify-start px-2">
                <img className="hover:scale-105" src={logo} alt="Logo" />
              </Link>
              <ThemeToggle />
            </div>
            <div className="flex flex-col items-center justify-center px-4 xl:flex-row">
              <img
                className="w-100 m-2 h-auto items-center justify-center rounded-2xl"
                src={project.src}
                alt={project.title}
              />
              {project.mobileImg && (
                <img
                  className="h-100 w-auto items-center justify-center rounded-2xl"
                  src={project.mobileImg}
                  alt={project.title}
                />
              )}
            </div>
            <div className=" mt-4 flex  justify-center pb-6">
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
              {project.livePreviewLink && (
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
              )}
            </div>
            <section className="ml-4 flex flex-col items-center justify-center">
              <h2 className="m-4 text-3xl font-bold">{project.title}</h2>

              <h3 className="mt-8 text-xl font-bold">About This Project</h3>
              <p className="max-w-100 px-4 text-left opacity-60">
                {project.description}
              </p>
              <h3 className="mt-8 text-xl font-bold">Challenges</h3>
              <p className="max-w-100 mb-10 px-4 text-left opacity-60">
                {project.challenge}
              </p>
            </section>
            <Footer />
          </motion.main>
        )

      default:
        return <div>Oops! there's nothing here... </div>
    }
  }

  return <div>{renderContent()}</div>
}

export default ProjectPage
