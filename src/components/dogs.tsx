import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Dogs = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <h3 className="fade-in-3 cursor-pointer text-sm md:text-lg opacity-60">
            I&apos;m probably walking my dogs
          </h3>
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

export default Dogs;
