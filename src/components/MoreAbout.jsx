import Footer from './Footer'
import NavBar from './nav'

const About = () => {
  return (
    <main className="relative min-h-full bg-gradient-to-br from-gray-300 to-emerald-400 p-0 text-slate-900 dark:bg-gradient-to-br dark:from-sky-950 dark:to-slate-900 dark:text-cyan-200">
      <NavBar />
      <section className="flex flex-col items-start px-20 pt-40 ">
        <h1 className="pb-5 text-4xl font-bold">Who am I?</h1>
        <p className="opacity-60">
          My name is Dillon Walsh, I grew up in a small town in Massachussetts
          and in my mid 20's moved to a slightler larger town in Massachussetts
          where I currently live with my long time Girlfriend (7 years) and our
          two dogs.
        </p>
        {/* add an image of me--
      add a some discusison of how I began to grow interest in programming, growing up, current interests, pictures of the pets*/}
      </section>
      <Footer />
    </main>
  )
}

export default About
