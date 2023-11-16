import logo from "/assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const scrollAbout = () => {
    window.scrollTo({
      top: 130,
      behavior: "smooth",
    });
  };
  const scrollTech = () => {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  }
  const scrollProjects = () => {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="pb-15 fade-in flex flex-row items-center justify-between p-4">
        <a href="home" id="logo" className="justify-start px-2">
          <img className="hover:scale-105" src={logo} alt="Logo" />
        </a>
        <div className="items-end justify-center px-2">
          <a className="m-2 hover:underline" href="#about" onClick={scrollAbout}>
            About
          </a>
          <a className="m-2 hover:underline" href="#tech" onClick={scrollTech}>
            Tech
          </a>
          <a className="m-2 hover:underline " href="#projects" onClick={scrollProjects}>
            Projects
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-10 md:flex-row fade-in-2">
        <div className="flex w-full flex-col px-6 md:w-1/2">
          <h1 id="home" className="px-5 pb-2 text-5xl">
            Dillon Walsh
          </h1>
          <h2 className="px-5 pb-2 text-2xl opacity-60">
            Full Stack Web Developer and Designer
          </h2>
          <div id="links" className="px-5 pt-4 ml-1 text-cyan-100 opacity-60">
            <a
              id="githubLink"
              href="https://github.com/Dillonpw/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Github"
            >
              <FontAwesomeIcon
                className="mr-8 h-8 w-8 hover:scale-110"
                icon={faGithub}
              />
            </a>
            <a
              id="linkedinLnk"
              href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Linkedin"
            >
              <FontAwesomeIcon
                className=" h-8 w-8 hover:scale-110"
                icon={faLinkedinIn}
              />
            </a>
          </div>
        </div>
        <div className="mt-5 flex w-full px-6 md:w-1/2">
          <p className="px-6 opacity-60">
            After graduating from College in 2019, I took a full time
            position as a 911 emergency dispatcher. Though the job could be
            demanding, it also afforded me plenty of downtime which I used to
            learn web development using free resources like freeCodeCamp and The
            Odin Project. Since then I have been designing, building and
            continuing to learn. Now I contribute to The Odin Project curriculum
            and build projects for myself and customers in my spare time.
          </p>
        </div>
      </div>
    </>
  );
}
