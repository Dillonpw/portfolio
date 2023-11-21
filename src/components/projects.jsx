import images from './images'

export default function Projects() {
  return (
    <div className="fade-in-6">
      <h3
        id="projects"
        className="flex column text-2xl bold justify-center items-center"
      >
        Projects
      </h3>
      {images.map(({ id, src, title, description }) => (
        <img key={id} src={src} title={title} alt={description} />
      ))}
    </div>
  )
}
