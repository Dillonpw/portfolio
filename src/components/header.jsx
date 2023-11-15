import logo from '/assets/logo.svg';

export default function Header() {
    return (
        <>
            <div className="flex justify-between items-center p-4 pb-15 fade-in">
                <a href="top" id="top" className="justify-start px-2">
                    <img className="hover:scale-105" src={logo} alt="Logo" />
                </a>
                <div className="justify-center items-end px-2">
                    <a
                        className="m-2 hover:underline 
                        "
                        href="#about"
                    >
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
            <div className="flex justify-center items-center column pt-10">
                <div className="flex flex-col w-1/2 p-6">
                    <h1 id="top" className="text-5xl pb-2">
                        Dillon Walsh
                    </h1>
                    <h2 className="text-2xl">
                        Full Stack Web Developer and Designer
                    </h2>
                    <div className="text-2xl">
                        <p>Thanks for stopping by!</p>
                    </div>
                    <p className="p-5">Catchy paragraph.</p>
                </div>
                <div className="flex p-6 w-1/2">
                    <p className="text-left">
                        After graduating from University in 2019, I took a full
                        time posiiton as a 911 emergency dispatcher. Though the
                        job could be demanding, it also afforded me plenty of
                        downtime which I used to learn web development using
                        free resources like freeCodeCamp and The Odin Project.
                        Since then I have been designing, building, consulting
                        and contiuning to learn. Now I contribute to The Odin
                        Project curriculum and build projects for myself and
                        customers in my spare time.
                    </p>
                </div>
            </div>
        </>
    );
}
