import { useState } from 'react'

export default function Tech() {
  const [devTools, setDevTools] = useState([
    'React',
    'Tailwind',
    'Bootstrap',
    'Express',
    'MongoDB',
    'Next.js',
  ])
  const [otherTools, setOtherTools] = useState([
    'Git',
    'Vite',
    'Figma',
    'Jest',
    'Vitest',
  ])
  const [learning, setLearning] = useState([
    'Typescript',
    'Python',
    'Angular',
    'Astro',
    'Three.js',
  ])

  return (
    <div
      id="tech"
      className=" flex flex-col items-center justify-center rounded-md p-10 text-center"
    >
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-10 pt-10 text-lg sm:grid-cols-1 md:grid-cols-3 fade-in-5">
        <div>
          <p className="pb-2 text-2xl font-bold">Langauges</p>
          <ul className="list-none space-y-2">
            {devTools.map((dt) => (
              <li className="opacity-50" key={dt}>
                {dt}
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
  )
}
