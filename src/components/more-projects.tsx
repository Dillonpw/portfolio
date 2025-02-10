import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

export default function MoreProjects() {
    return (
        <Button variant="ghost" className="flex items-center space-x-2">
        <a target="_blank" href="https://github.com/Dillonpw/"> More Projects </a>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                id="githubLink"
                href="https://github.com/Dillonpw/"
                target="_blank"
                rel="noreferrer"
                aria-label="redirect to Github"
                >
              </a>
            </TooltipTrigger>
            <TooltipContent>Github</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Button>
    )
}