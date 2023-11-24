import textBox from '/assets/textbox.png'

const images = [
  {
    id: 1,
    src: '/assets/dtView.jpg',
    title: 'dt-CV',
    description:
      'A React application where a user is able to view and print a basic resume before committing to a professional resume. The user has the ability to update their personal info, work history, and education, adding multiple work and education items if they wish. Upon visiting the page, the template will be filled out with generic information to give the user an idea of what the finished product may look like.',
  },
  { id: 2, src: '/assets/mView.jpg', title: 'm-CV', description: '' },
]

export default function Projects() {
  return (
    <div className="fade-in-6">
        <h3 id="projects" className="text-2xl font-bold text-center mb-4">
          Projects
        </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        <div className="flex flex-col items-center md:col-span-1">
          <a
            className="hover:scale-105"
            href="https://cv-template-navy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-100 rounded-lg h-50"
              src={images[0].src}
              alt={images[0].title}
            />
          </a>
          <div className="p-4 opacity-50 w-100">
            <p>{images[0].description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:col-span-1">
          <a
            className="hover:scale-105"
            href="https://cv-template-navy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-100 h-100 rounded-lg"
              src={images[1].src}
              alt={images[1].title}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
