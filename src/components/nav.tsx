import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { ModeToggle } from "./mode-toggle"
import { Linkedin, Twitter, Github } from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@radix-ui/react-tooltip"

const Nav = () => {
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
        className={`mx-4 flex items-center justify-between px-6 backdrop-blur-xl transition-all ${
          isScrolled
            ? "mt-4 h-16 w-[90%] rounded-full bg-transparent text-black shadow-md dark:bg-neutral-900 dark:text-white"
            : "h-16 w-full dark:text-white"
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
          <TooltipProvider>
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
                  <Twitter />
                </a>
              </TooltipTrigger>
              <TooltipContent>Twitter/X</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
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
                  <Github />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  id="linkedinLink"
                  href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="block p-2 transition-transform hover:scale-110"
                >
                  <Linkedin />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ModeToggle />
      </header>
    </motion.nav>
  );
};

export default Nav;
