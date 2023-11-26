import { useState } from 'react'

export default function Tech() {
  const [devTools, setDevTools] = useState([
    'Typescript',
    'React',
    'Tailwind',
    'Express',
    'MongoDB',
  ])
  const [otherTools, setOtherTools] = useState([
    'Bootstrap',
    'Git',
    'Vite',
    'Figma',
    'Vitest',
  ])
  const [learning, setLearning] = useState([
    'Python',
    'Angular',
    'Astro',
    'Three.js',
    'Next.js',
  ])

  return (
    <div
      id="tech"
      className=" my-60 flex flex-col items-center justify-center rounded-md p-10 text-center"
    >
      <div className="fade-in-5 grid w-full grid-cols-1 gap-x-10 gap-y-10 pt-10 text-xl sm:grid-cols-1 md:grid-cols-3">
        <div>
          <p className="pb-2 text-3xl font-bold">Stack</p>
          <ul className="list-none space-y-2">
            {devTools.map((dt) => (
              <li className="opacity-50" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-3xl font-bold">Tools</p>
          <ul className="list-none space-y-2">
            {otherTools.map((ot) => (
              <li className="opacity-50" key={ot}>
                {ot}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-3xl font-bold">Learning</p>
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
  )
}
