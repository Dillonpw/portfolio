import * as motion from "motion/react-client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
        className="mt-40 flex flex-col items-center justify-center pb-4 text-center text-sm xl:px-80 dark:text-gray-200"
      >
        <p className="mx-6">
          Built using <b className="text-emerald-700">React</b>,{" "}
          <b className="text-emerald-700">Astro</b> and{" "}
          <b className="text-emerald-700">Tailwind</b>, with some elements
          designed in <b className="text-emerald-700">Figma</b>
          <br />
          &copy; {year} All Rights Reserved
        </p>
      </motion.footer>
    </>
  );
}
