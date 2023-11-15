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
    <div>
      <Header />

      <button
        id="arrow"
        onClick={scrollTop}
        className="button-bounce fixed bottom-20 right-20 hidden animate-none rounded-full bg-cyan-50 px-2 py-1 text-black md:flex"
        aria-label="Scroll to top"
      >
        &uarr;
      </button>

      <Tech />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
