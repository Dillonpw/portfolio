import { motion } from "framer-motion";
import { devTools } from "../../constants";

export default function Tech() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: 0 }}
      viewport={{ once: true }}
      className="mt-16 cursor-pointer text-center md:mx-auto md:max-w-4xl lg:max-w-5xl dark:text-gray-200"
    >
      <h2 className="mb-4 text-xl md:text-2xl">Working with</h2>
      <div className="relative hidden md:block">
        <div className="relative flex overflow-hidden">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="animate-marquee flex min-w-full shrink-0 items-center justify-around"
              aria-hidden={row === 1}
            >
              {devTools.map((dt, index) => (
                <motion.span
                  key={`${row}-${index}`}
                  className="mx-4 text-base opacity-60"
                  whileHover={{ scale: 1.4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {dt}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white via-white to-transparent dark:from-neutral-950 dark:via-neutral-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white via-white to-transparent dark:from-neutral-950 dark:via-neutral-950"></div>
      </div>
      <div className="md:hidden">
        <ul className="flex flex-wrap items-center justify-center gap-3 px-4">
          {devTools.map((dt) => (
            <motion.li
              className="text-sm opacity-60 md:text-lg"
              key={dt}
              whileHover={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {dt}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
