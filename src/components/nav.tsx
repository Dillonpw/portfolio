import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { ModeToggle } from "./mode-toggle";
import { Twitter, Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      className="sticky top-0 left-0 z-50 flex w-full justify-center transition-all"
    >
      <header
        className={`mx-auto flex w-full max-w-4xl items-center justify-between px-6 backdrop-blur-xl transition-all ${
          isScrolled
            ? "mt-4 h-16 rounded-full bg-transparent text-black shadow-md dark:bg-neutral-900 dark:text-white"
            : "h-16"
        }`}
      >
        <a href="/" id="logo">
          <img
            className="hover:scale-105"
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            loading="eager"
          />
        </a>
        <div className="flex space-x-4">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  id="xLink"
                  href="https://x.com/dillonpw_"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter/X"
                  className="block p-2 transition-transform hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="select-none">
                <p className="text-sm">Twitter/X</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  id="githubLink"
                  href="https://github.com/Dillonpw/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="block p-2 transition-transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="select-none">
                <p className="text-sm">GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ModeToggle client:load />
      </header>
    </motion.nav>
  );
}
