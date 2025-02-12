import Switcher from "./switcher";
import Dogs from "./dogs";
import Links from "./links";
import { Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 grid grid-cols-1 items-center justify-center gap-8 md:mx-10 md:grid-cols-2"
    >
      <div className="flex justify-center">
        <img
          src="https://utfs.io/f/2x9MeROBnW8iOQeCQKVh4ogqGP9YIydZrTlvxQFDetMEbBfH"
          alt="cartoon"
          width={250}
          height={250}
          className="rounded-full border-2 dark:border-gray-200"
        />
      </div>

      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 id="home" className="text-2xl font-semibold md:text-3xl">
          Dillon Walsh
        </h1>
        <Switcher />

        <h2 className="cursor-pointer text-sm opacity-60 md:text-lg">
          If I&apos;m not building{" "}
          <a
            className="hover:underline"
            href="https://www.schedtrack.com"
            target="_blank"
          >
            Schedtrack.com
          </a>{" "}
        </h2>
        <Dogs />
        <Links />
      </div>
    </motion.div>
  );
};

export default Header;
