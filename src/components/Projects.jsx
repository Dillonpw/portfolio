import { Link } from 'react-router-dom'
import images from './Images'
import { motion } from 'framer-motion'
import Contact from './Contact.jsx'


const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="m-10 mt-40 flex flex-col"
    >
      <h3 id="projects" className="my-20 text-center text-4xl font-bold">
        Selected Projects
      </h3>
      <p className=" mb-6 text-center text-lg opacity-50">
        Click on the images for more infomation about each listed project
      </p>

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
            <div className="mt-8 flex flex-wrap items-center justify-center ">
              {image.tags.map((tag) => (
                <span
                  key={tag}
                  className="m-2 cursor-default rounded-2xl border-2  dark:bg-cyan-200 px-3 py-2 dark:text-slate-800 hover:border-2 border-cyan-200 bg-slate-800 text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-4 text-lg opacity-50">
              <p>{image.description}</p>
            </div>{' '}
          </div>
        ))}
      </div>
      <div className="flex flex-col pt-10">
        <p className="m-4 text-center text-4xl font-bold">There's More!</p>
        <p className="mx-8 text-left text-xl">
          I have several more projects in the works that I am happy to show and discuss including a professional hair dresser's portfolio and a small business's website still in the planning phase.
        </p>
        <p className="mx-8 text-left text-xl">
          If you're interested feel free to send me a message about the private projects, or just visit my profile on
          <a href='https://github.com/Dillonpw' target="_blank" rel="noreferrer" className=" ml-2 underline">Github</a> for everything else!
        </p>
        <Contact/>
      </div>
    </motion.section>
  )
}
export default Projects
