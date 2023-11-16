import { useState } from "react";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import Projects from "./projects.jsx";
import Tech from "./tech.jsx";
 


function App() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="relative min-h-full bg-gradient-to-br from-sky-950 to-slate-900 p-0 text-cyan-200 first-letter:m-0 ">
        <Header />

        <button
          id="arrow"
          onClick={scrollTop}
          className="button-bounce fixed bottom-4 right-10 hidden h-1 w-1 items-center justify-center rounded-full bg-cyan-50 p-4 text-black hover:bg-cyan-200 md:flex"
          aria-label="Scroll to top"
        >
          &uarr;
        </button>


        <Tech />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
export default App;
