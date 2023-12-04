import { Link } from 'react-router-dom'

const images = [
  {
    id: 'cv-template',
    src: '/assets/cv-template.png',
    title: 'CV',
    description:
      'A React application where a user is able to view and print a basic resume before committing to a professional resume. The user has the ability to update their personal info, work history, and education, adding multiple work and education items if they wish. Upon visiting the page, the template will be filled out with generic information to give the user an idea of what the finished product may look like.',
  },
]

export default function Projects() {
  return (
    <div className="fade-in-4">
      <h3 id="projects" className="mb-4 text-center text-3xl font-bold">
        Projects </h3>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex flex-col items-center md:col-span-1"
          >
            <Link className="hover:scale-105" to={`/projects/${image.id}`}>
              <img
                className="w-auto h-100 rounded-lg"
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
