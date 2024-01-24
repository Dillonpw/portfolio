import { Link } from 'react-router-dom'
import useScrollIn from './ScrollIn'
import images from './Images'

const Projects = () => {
  const [ref, isVisible] = useScrollIn()

  return (
    <section
      ref={ref}
      className={`scroll-in ${isVisible ? 'visible' : ''} flex flex-col`}
    >
      <h3 id="projects" className="mb-6 text-center text-4xl font-bold">
        Selected Projects
      </h3>

      <div className="m-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {images.map((image) => (
          <div key={image.id} className="mb-4 flex flex-col items-center">
            <Link
              description="More info about projects"
              className="hover-scale block "
              to={`/projects/${image.id}`}
            >
              <img
                className="h-[207px] w-[377px] rounded-xl border-2 border-white sm:h-[311px] sm:w-[565px]"
                src={image.src}
                alt={image.title}
              />
            </Link>
            <div className="p-4 text-lg opacity-50">
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects
