import { useState } from 'react';

export default function Tech() {
    const [frontEnd, setFrontEnd] = useState([
        'React',
        'Tailwind',
        'Bootstrap',
    ]);
    const [backend, setBackEnd] = useState(['Express', 'MongoDB', 'Next.js']);
    const [otherTools, setOtherTools] = useState([
        'Git',
        'Vite',
        'Figma',
        'Jest',
    ]);
    const [learning, setLearning] = useState([
        'Typescript',
        'Python',
        'Angular',
    ]);

    return (
        <div className=" flex flex-col justify-center items-center text-center rounded-md p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm: grid-cols-1 gap-x-10 gap-y-10 pt-10 w-100 text-lg">
                <div className="border-1 p-12 pt-2 rounded-2xl shadow-inner shadow-cyan-200">
                    <p className="underline font-bold pb-2 text-2xl">
                        Front End
                    </p>
                    <ul className="list-none space-y-2">
                        {frontEnd.map((fe) => (
                            <li key={fe}>{fe}</li>
                        ))}
                    </ul>
                </div>
                <div className="border-1 p-8 pt-2 rounded-2xl shadow-inner shadow-cyan-200">
                    <p className="underline font-bold pb-2 text-2xl">
                        Back End
                    </p>
                    <ul className="list-none space-y-2">
                        {backend.map((be) => (
                            <li key={be}>{be}</li>
                        ))}
                    </ul>
                </div>
                <div className="border-1 p-8 pt-2 rounded-2xl shadow-inner shadow-cyan-200">
                    <p className="underline pb-2 font-bold text-2xl">Tools</p>
                    <ul className="list-none space-y-2">
                        {otherTools.map((ot) => (
                            <li key={ot}>{ot}</li>
                        ))}
                    </ul>
                </div>
                <div className="border-1 p-8 pt-2 rounded-2xl shadow-inner shadow-cyan-200">
                    <p className="underline font-bold pb-2 text-2xl">
                        Learning
                    </p>
                    <ul className="list-none space-y-2">
                        {learning.map((le) => (
                            <li key={le}>{le}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
