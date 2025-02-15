import * as motion from "motion/react-client";
export default function Redacted() {

    return <div>
        <motion.p 
        whileHover={{opacity:0}}
        className="bg-black text-white text-xl cursor-pointer">REDACTED</motion.p>
    </div>;
}