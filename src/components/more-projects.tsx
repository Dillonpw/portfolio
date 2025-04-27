import { Button } from "./ui/button";
import * as motion from "motion/react-client";

export default function MoreProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Button variant="outline" size="default" asChild>
        <a target="_blank" href="https://github.com/Dillonpw/">
          More Projects
        </a>
      </Button>
    </motion.div>
  );
}
