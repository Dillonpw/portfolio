import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";

export default function Switcher() {
  // Cycle between two states
  const [text, cycleText] = useCycle(
    "Web Developer",
    "Mobile Developer",
    "Frontend Developer",
    "Software Engineer",
    "Full Stack Developer",
  );

  useEffect(() => {
    // Automatically cycle the text every 3 seconds
    const interval = setInterval(() => {
      cycleText();
    }, 3000);

    return () => clearInterval(interval);
  }, [cycleText]);

  return (
    <motion.span
      key={text}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.5 }}
    >
      <p className="fade-in-3 text-sm opacity-60 md:text-lg">{text}</p>
    </motion.span>
  );
}
