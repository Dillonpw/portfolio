import { Link } from 'react-router-dom'
import images from './Images'
import { motion } from 'framer-motion'

const Projects = () => {

  return (
    <motion.section initial={{ opacity:0 }}
    transition={{duration:1}}
    whileInView={{ opacity:1 }}

      className='flex flex-col m-10'
    >
      <h3 id="projects" className="my-20 text-center text-4xl font-bold">
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
            <div className="mt-8 flex flex-wrap justify-center items-center ">
              {image.tags.map((tag) => (
                <span
                  key={tag}
                  className="m-2 cursor-default rounded-2xl border-2 border-slate-800 bg-cyan-200 px-3 py-2 text-slate-800 hover:border-2 hover:border-cyan-200 hover:bg-slate-800 hover:text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-4 text-lg opacity-50">
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
export default Projects
