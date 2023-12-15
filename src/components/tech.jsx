import useScrollIn from './scrollIn'

export default function Tech() {
  const [ref, isVisible] = useScrollIn();

  const devTools = [
    'Typescript',
    'React',
    'Tailwind',
    'Express',
    'Astro',
  ];
  const otherTools = [
    'Git',
    'VS Code',
    'Vite',
    'Figma',
    'Vitest',
  ];
  const learning = [
    'Astro',
    'Python',
    'Angular',
    'Three.js',
    'Next.js',
    'MongoDB',
  ];

  return (
    <div
      ref={ref}
      id="tech"
      className={`scroll-in ${isVisible ? 'visible' : ''} my-40 flex flex-col items-center justify-center rounded-md p-10 text-center`}
    >
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-10 pt-10 text-xl sm:grid-cols-1 md:grid-cols-3">
        <div>
          <p className="pb-2 text-3xl font-bold">Tech</p>
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
          <p className="pb-2 text-3xl font-bold">What I'm Learning</p>
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
