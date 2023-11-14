import logo from '/assets/logo.svg';

export default function Header() {
    return (
        <>
            <div className="flex justify-between items-center p-4 pb-15 shadow-md rounded-xl shadow-slate-800 fade-in">
                <a href="top" id="top" className="justify-start px-2">
                    <img className="hover:scale-105" src={logo} alt="Logo" />
                </a>
                <div className="justify-center items-end px-2">
                    <a className="m-2 hover:underline select:underline" href="#about">
                        About
                    </a>
                    <a className="m-2 hover:underline" href="#projects">
                        Projects
                    </a>

                    <a className="m-2 hover:underline" href="#connect">
                        Connect
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center column pt-10">
                <h1 id="top" className="text-5xl pb-5">
                    Dillon Walsh
                </h1>
                <h2 className="text-3xl pb-10 text-center">
                    Full Stack Web Developer and Designer
                </h2>
            </div>
        </>
    );
}
