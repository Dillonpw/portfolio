import Footer from './footer.jsx';
import Header from './header.jsx';
import Projects from './projects.jsx';
import Tech from './tech.jsx';

function App() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <Header />

            <button
                id="arrow"
                onClick={scrollTop}
                className="hidden md:flex fixed right-20 bottom-20 bg-cyan-50 rounded-full text-black px-2 py-1 animate-none button-bounce"
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
