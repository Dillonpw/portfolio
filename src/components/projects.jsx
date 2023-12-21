import { Link } from 'react-router-dom'
import useScrollIn from './scrollIn'
import images from './images'


export default function Projects() {
  const [ref, isVisible] = useScrollIn();

  return (
    <div ref={ref} className={`scroll-in ${isVisible ? 'visible' : ''} flex flex-col`}>
      <h3 id="projects" className="mb-4 text-center text-3xl font-bold">
        Projects
      </h3>

      <div className="m-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex flex-col items-center mb-4"
          >
            <Link className="block hover-scale" to={`/projects/${image.id}`}>
              <img
                className="w-100 h-auto rounded-2xl object-cover"
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
