import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import * as motion from "motion/react-client";

export default function Dogs() {
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.h3
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: .6, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1,
                  duration: 0.4,
                  type: "spring",
                  damping: 10,
                }}
              
          className="fade-in-3 cursor-pointer text-sm opacity-60 md:text-lg">
            I&apos;m probably walking my dogs
          </motion.h3>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="border-none bg-transparent p-0"
        >
          <img
            className="rounded-md"
            src="/Ollie-benny.webp"
            width={180}
            height={180}
            alt="my dogs Ollie and Benny"
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

