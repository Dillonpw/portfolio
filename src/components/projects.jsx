import { Link } from 'react-router-dom'

const images = [
  {
    id: 'cv-template',
    src: '/assets/cv-template.png',
    title: 'CV',
    description:
      'A React application where a user is able to view and print a basic resume before committing to a professional resume. The user has the ability to update their personal info, work history, and education, adding multiple work and education items if they wish. Upon visiting the page, the template will be filled out with generic information to give the user an idea of what the finished product may look like.',
  },

  {
    id: 'schedule-app',
    src: '/assets/schedule-app.png',
    title: 'schedule',
    description:
      'A basic HTML/CSS/JS web page that accepts user input and returns a work schedule based on their work rotation. As a 911 Dispatcher, my schedule was different every week because of the need to staff the position 24 hrs a day and required a great deal of effort to try to schedule anything in advance. I built this page as a solution for myself and my coworkers who wanted to quickly check to see if they were going to be working on a given day or not.',
  },
]

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
            <Link className="hover:scale-105" to={`/projects/${image.id}`}>
              <img
                className="w-100 h-100 rounded-2xl"
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
