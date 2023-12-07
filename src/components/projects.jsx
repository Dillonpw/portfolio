import { Link } from 'react-router-dom'
import images from './images'


export default function Projects() {
  return (
    <div className="fade-in-4">
      <h3 id="projects" className="mb-4 text-center text-3xl font-bold">
        Projects{' '}
      </h3>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex flex-col items-center md:col-span-1"
          >
            <Link className="hover:scale-105 pt-4" to={`/projects/${image.id}`}>
              <img
                className="w-100 h-100  rounded-2xl"
                src={image.src}
                alt={image.title}
              />
            </Link>
            <div className="w-100 p-4 text-lg opacity-50">
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
