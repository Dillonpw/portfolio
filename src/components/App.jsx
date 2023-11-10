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
            <div className="fixed right-20 bottom-20">
                <a href="#top" className="" onClick={scrollTop}>
                    &uarr;
                </a>
            </div>
            <Tech />
            <Projects />
            <Footer />
        </div>
    );
}
export default App;
