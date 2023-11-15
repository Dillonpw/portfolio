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
    <div
      id="tech"
      className=" flex flex-col items-center justify-center rounded-md p-10 text-center"
    >
      <div className="sm: w-100 grid grid-cols-1 gap-x-10 gap-y-10 pt-10 text-lg sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="pb-2 text-2xl font-bold">Front End</p>
          <ul className="list-none space-y-2">
            {frontEnd.map((fe) => (
              <li className="opacity-50" key={fe}>
                {fe}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-2xl font-bold">Back End</p>
          <ul className="list-none space-y-2">
            {backend.map((be) => (
              <li className="opacity-50" key={be}>
                {be}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-2xl font-bold">Tools</p>
          <ul className="list-none space-y-2">
            {otherTools.map((ot) => (
              <li className="opacity-50" key={ot}>
                {ot}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-2xl font-bold">Learning</p>
          <ul className="list-none space-y-2">
            {learning.map((le) => (
              <li className="opacity-50" key={le}>
                {le}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
