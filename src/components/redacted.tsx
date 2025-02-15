import * as motion from "motion/react-client";

export default function Redacted() {
  return (
    <div className="relative inline-block">
      <motion.span
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        className="cursor-pointer bg-black p-1 text-xl text-white"
      >
        REDACTED
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 cursor-pointer bg-black text-xl text-white"
      >
        Nice Try
      </motion.span>
    </div>
  );
}
