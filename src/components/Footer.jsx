const Footer = () => {
  const scrollAbout = () => {
    window.scrollTo({
      top: 90,
      behavior: 'smooth',
    })
  }

  const scrollTech = (e) => {
    e.preventDefault()
    const techElement = document.getElementById('tech')
    if (techElement) {
      const techPos = techElement.offsetTop
      window.scrollTo({
        top: techPos,
        behavior: 'smooth',
      })
    }
  }

  const scrollProjects = (e) => {
    e.preventDefault()
    const projectElement = document.getElementById('projects')
    if (projectElement) {
      const projectPos =
        projectElement.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: projectPos,
        behavior: 'smooth',
      })
    }
  }
  return (
    <>
      <footer className="mt-6 flex flex-col items-center justify-center bg-emerald-700 pb-6 pt-10 text-center text-sm text-white dark:bg-sky-950">
         <nav className=" text-white">
            <div className="justify-center p-2 text-l">
              <a
                className="m-2 hover:underline"
                href="#about"
                onClick={scrollAbout}
              >
                About
              </a>
              <a
                className="m-2 hover:underline "
                href="#projects"
                onClick={scrollProjects}
              >
                Projects
              </a>
              <a
                className="m-2 hover:underline"
                href="#tech"
                onClick={scrollTech}
              >
                Tech
              </a>
            </div>
          </nav>
        <p>
          Built using <b>React</b> and <b>Tailwind</b>, with some elements
          designed in Figma, Deployed through Vercel.
          <br />
          Created by Dillon Walsh &copy;2024 All Rights Reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
