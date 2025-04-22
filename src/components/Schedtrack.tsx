import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

export default function Schedtrack() {
  return (
    <motion.div
      className="mx-10 mt-16 flex flex-col items-center justify-center dark:text-gray-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <p className="pb-4 text-2xl">
        Visit{" "}
        <a
          className="hover:underline"
          href="https://schedtrack.com"
          target="_blank"
          aria-label="Schedtrack"
        >
          Schedtrack.com
        </a>
      </p>

      <div className="bg-card shadow-primary/5 relative rounded-xl border p-1 shadow-xl">
        <div className="from-primary/30 to-secondary/30 absolute -inset-1 rounded-xl bg-gradient-to-r opacity-20 blur-md"></div>
        <div className="relative overflow-hidden rounded-lg">
          <video
            autoPlay
            muted
            loop
            className="aspect-video w-full rounded-lg object-cover"
            src="./schedtrack-demo.mp4"
          />
        </div>
      </div>
      <p className="mt-4 text-sm opacity-60 md:text-base md:leading-8">
        This is Schedtrack, a free and open source scheduling software, fully
        designed and built by me. While the app allows for regular scheduling
        like everything does, what sets this apart is the ability to customize
        your schedule if your weekly schedule changes. Shift workers often have
        irregular schedules meaning they work different days each week and as
        far as I can see most schedule software leave you to manually enter
        that; and Schedtrack is designed to accommodate that. This app came out
        of personal need, and I'm glad the effect its had on others who use it.
      </p>
      <div className="mt-6 flex items-center gap-2">
        <a
          href="https://github.com/Dillonpw/schedule"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="https://www.schedtrack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
