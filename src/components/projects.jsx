import { Link } from 'react-router-dom'
import useScrollIn from './scrollIn'
import images from './images'

export default function Projects() {
  const [ref, isVisible] = useScrollIn()

  return (
    <div
      ref={ref}
      className={`scroll-in ${isVisible ? 'visible' : ''} flex flex-col`}
    >
      <h3 id="projects" className="mb-4 text-center text-3xl font-bold">
        Projects
      </h3>

      <div className="m-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {images.map((image) => (
          <div key={image.id} className="mb-4 flex flex-col items-center">
            <Link description="More info about projects" className="hover-scale block " to={`/projects/${image.id}`}>
              <img
                className="w-100 sm:h-100 rounded-2xl h-auto "
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
    </div>
  )
}
