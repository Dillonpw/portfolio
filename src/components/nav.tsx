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
        className={`mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-2 backdrop-blur-xl transition-all ${
          isScrolled
            ? "h-16 rounded-b-md bg-transparent text-black shadow-md dark:bg-neutral-900 dark:text-white"
            : ""
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
        <div className="flex space-x-4 dark:text-gray-100">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="twitter-icon h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="github-icon h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" className="github-arm" />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="select-none">
                <p className="text-sm">GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ModeToggle />
      </header>
    </motion.nav>
  );
}
