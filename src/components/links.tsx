import { Button } from "./ui/button";
import * as motion from "motion/react-client";

export default function Links() {
  const buttonVariants = {
    initial: { opacity: 0, y: -90 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        delay: index * 0.2,
      },
    }),
  };

  const links = [
    { href: "/projects", label: "Projects", isExternal: false },
    { href: "/blog", label: "Blog", isExternal: false },
    { href: "https://work.dillonwalsh.com", label: "Work", isExternal: true },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-2 flex items-center justify-center gap-4"
    >
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          custom={index}
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <a
            href={link.href}
            target={link.isExternal ? "_blank" : "_self"}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
          >
            <Button
              className="w-22 bg-emerald-500 text-center text-sm font-semibold text-gray-950 hover:bg-emerald-400 md:text-base dark:bg-emerald-500/80 dark:hover:bg-emerald-400"
              variant="default"
              size="lg"
            >
              {link.label}
            </Button>
          </a>
        </motion.div>
      ))}
    </motion.section>
  );
}
