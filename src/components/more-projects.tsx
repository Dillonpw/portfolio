import { Button } from "./ui/button";
import * as motion from "motion/react-client";

export default function MoreProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, scale: 0 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.3 }}
    >
      <Button variant="outline" size="default" asChild>
        <a target="_blank" href="https://github.com/Dillonpw/">
          More Projects
        </a>
      </Button>
    </motion.div>
  );
}
