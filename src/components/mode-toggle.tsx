import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setTheme] = React.useState("light");
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(systemDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemDark);
    }
  }, []);

  const updateTheme = (newTheme: string) => {
    const resolvedTheme =
      newTheme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : newTheme;

    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setOpen(false);
  };

  // Handle manual button click for Safari
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="relative">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            ref={buttonRef}
            variant="outline"
            size="icon"
            onClick={handleButtonClick}
            className="relative h-10 w-10 cursor-pointer transition-transform select-none active:scale-95"
            style={{
              WebkitTapHighlightColor: "transparent",
              WebkitTouchCallout: "none",
              touchAction: "manipulation",
              userSelect: "none",
              outline: "none",
            }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 dark:text-gray-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={5}
          className="animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-[60] min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md dark:bg-gray-950"
        >
          <DropdownMenuItem
            onTouchEnd={() => updateTheme("light")}
            onClick={() => updateTheme("light")}
            className="flex cursor-pointer items-center px-2 py-2 text-sm outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onTouchEnd={() => updateTheme("dark")}
            onClick={() => updateTheme("dark")}
            className="flex cursor-pointer items-center px-2 py-2 text-sm outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onTouchEnd={() => updateTheme("system")}
            onClick={() => updateTheme("system")}
            className="flex cursor-pointer items-center px-2 py-2 text-sm outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ModeToggle;
