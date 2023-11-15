import { useState } from "react";

export default function Tech() {
  const [frontEnd, setFrontEnd] = useState(["React", "Tailwind", "Bootstrap"]);
  const [backend, setBackEnd] = useState(["Express", "MongoDB", "Next.js"]);
  const [otherTools, setOtherTools] = useState([
    "Git",
    "Vite",
    "Figma",
    "Jest",
  ]);
  const [learning, setLearning] = useState(["Typescript", "Python", "Angular"]);

  return (
    <div className=" flex flex-col items-center justify-center rounded-md p-10 text-center">
      <div className="sm: w-100 grid grid-cols-1 gap-x-10 gap-y-10 pt-10 text-lg md:grid-cols-2 lg:grid-cols-4">
        <div className="border-1 rounded-2xl p-12 pt-2 shadow-inner shadow-cyan-200">
          <p className="pb-2 text-2xl font-bold underline">Front End</p>
          <ul className="list-none space-y-2">
            {frontEnd.map((fe) => (
              <li key={fe}>{fe}</li>
            ))}
          </ul>
        </div>
        <div className="border-1 rounded-2xl p-8 pt-2 shadow-inner shadow-cyan-200">
          <p className="pb-2 text-2xl font-bold underline">Back End</p>
          <ul className="list-none space-y-2">
            {backend.map((be) => (
              <li key={be}>{be}</li>
            ))}
          </ul>
        </div>
        <div className="border-1 rounded-2xl p-8 pt-2 shadow-inner shadow-cyan-200">
          <p className="pb-2 text-2xl font-bold underline">Tools</p>
          <ul className="list-none space-y-2">
            {otherTools.map((ot) => (
              <li key={ot}>{ot}</li>
            ))}
          </ul>
        </div>
        <div className="border-1 rounded-2xl p-8 pt-2 shadow-inner shadow-cyan-200">
          <p className="pb-2 text-2xl font-bold underline">Learning</p>
          <ul className="list-none space-y-2">
            {learning.map((le) => (
              <li key={le}>{le}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
