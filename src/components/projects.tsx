import { descriptions } from "../../constants";
import * as motion from "motion/react-client";

export default function ProjectList() {
  return (
    <div className="mt-10 px-4 sm:px-6 md:mt-32 lg:px-8">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 0 }}
        className="mb-6 text-center text-sm opacity-60 sm:text-base md:text-lg"
      >
        Click on the images for more information about each listed project
      </motion.p>
      <motion.section
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: -30 }}
        className="mt-8 flex flex-col md:mt-20"
      >
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {descriptions.slice(0, 5).map((descriptions: any) => (
            <div
              key={descriptions.id}
              className="mb-6 flex flex-col items-center"
            >
              <a
                aria-label={`More info about ${descriptions.title}`}
                className="block w-full overflow-hidden rounded-xl border-2 transition-all"
                href={`/projects/${descriptions.id}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="rounded-lg transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-60"
                    src={descriptions.src}
                    alt={descriptions.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center md:mt-8">
                {descriptions.tags.map((tag: string, index: number) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="m-1 cursor-default rounded-2xl border-2 bg-neutral-950 px-2 py-1 text-xs text-gray-200 md:m-2 md:px-3 md:py-2 md:text-sm dark:bg-gray-200 dark:text-neutral-950"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="p-2 text-sm opacity-60 md:p-4 md:text-lg dark:text-gray-200">
                <p>{descriptions.about}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
