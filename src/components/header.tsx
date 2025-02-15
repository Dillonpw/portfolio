import Switcher from "./switcher";
import Dogs from "./dogs";
import Links from "./links";
import { motion } from "framer-motion";
import Redacted from "./redacted";

export default function Header() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center md:mx-auto md:max-w-4xl lg:max-w-5xl">
      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 dark:text-gray-200">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <img
            src="https://utfs.io/f/2x9MeROBnW8iOQeCQKVh4ogqGP9YIydZrTlvxQFDetMEbBfH"
            alt="cartoon"
            width={250}
            height={250}
            className="rounded-full border-2 dark:border-gray-200"
          />
        </motion.div>

        <div className="flex flex-col items-center text-center md:items-center md:text-center">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.4,
              type: "spring",
              damping: 12,
            }}
            id="home"
            className="text-2xl font-semibold md:text-3xl"
          >
            Dillon Walsh
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.4,
              type: "spring",
              damping: 10,
            }}
          >
            <Switcher />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.4,
              type: "spring",
              damping: 12,
            }}
            className="text-sm opacity-60 md:text-lg"
          >
            If I'm not building{" "}
            <a
              className="cursor-pointer hover:underline"
              href="https://www.schedtrack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedtrack.com <br />
            </a>
            <span className="flex justify-center gap-1">
            or <Redacted />
            </span>
          </motion.h2>
          <Dogs />
          <Links />
        </div>
      </div>
    </div>
  );
}
