import * as motion from "motion/react-client";

export default function MoreInfo() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.75 }}
      className="mx-10 mt-16 flex flex-col gap-2 lg:mx-[12rem] xl:mx-[20rem] dark:text-gray-200"
    >
      <h1 className="text-center text-xl md:text-2xl">Want to Connect?</h1>
      <p className="text-center text-sm opacity-60 md:text-base">
        I&apos;m always looking for projects and opportunities to take on, feel
        free to reach out with your questions or ideas and I&apos;ll get back to
        you as soon as I can!
      </p>
      <motion.p
        whileHover={{
          scale: 1.4,
          transition: { duration: 0.2, type: "spring", damping: 3 },
        }}
        className="text-center text-base md:text-lg"
      >
        Dillonpwalsh10@gmail.com
      </motion.p>
    </motion.section>
  );
}
