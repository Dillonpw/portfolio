import { useState } from 'react';

export default function Tech() {
    const [frontEnd, setFrontEnd] = useState([
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Tailwind',
        'Bootstrap',
    ]);
    const [backend, setBackEnd] = useState([
        'Node.js',
        'Express',
        'MongoDB',
        'Next.js',
    ]);
    const [otherTools, setOtherTools] = useState([
        'Git',
        'Webpack',
        'Figma',
        'Jest',
        'Ejs',
    ]);
    const [learning, setLearning] = useState([
        'Typescript',
        'Python',
        'Angular',
    ]);

    return (
        <div className="text-center bg-gradient-to-r from-emerald-500 to-green-400 rounded-lg">
            <div>
                <p>Thanks for stopping by!</p>
                <p>Some paragraph about me.</p>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-5">
                <div className="text-center">
                    <p className="underline font-bold">Front End</p>
                    <ul className="list-none space-y-2">
                        {frontEnd.map((fe) => (
                            <li key={fe}>{fe}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-center">
                    <p className="underline font-bold">Back End</p>
                    <ul className="list-none space-y-2">
                        {backend.map((be) => (
                            <li key={be}>{be}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-center">
                    <p className="underline font-bold">Other Tools</p>
                    <ul className="list-none space-y-2">
                        {otherTools.map((ot) => (
                            <li key={ot}>{ot}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-center">
                    <p className="underline font-bold">Learning</p>
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
