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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-2 flex items-center justify-center gap-4"
    >
      {[
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
      ].map((link, index) => (
        <motion.div
          key={link.href}
          custom={index}
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <Button
            className="w-24 text-sm font-semibold md:text-lg bg-emerald-500"
            variant="default"
            asChild
          >
            <a href={link.href}>{link.label}</a>
          </Button>
        </motion.div>
      ))}
    </motion.section>
  );
}
