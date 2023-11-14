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
        <div className=" flex flex-col justify-center items-center text-center rounded-md p-10">
            <div className='text-2xl'>
                <p>Thanks for stopping by!</p>
                <p className='p-5'>I'm a Web Developer helping ideas become reality, both personal and professional.</p>
            </div>

            <div className="grid grid-cols-2 gap-x-20 gap-y-10 pt-10 w-100 text-lg">
                <div className="border-4 p-8 pt-2 rounded-2xl shadow-inner shadow-white">
                    <p className="underline font-bold pb-2 text-2xl">Front End</p>
                    <ul className="list-none space-y-2">
                        {frontEnd.map((fe) => (
                            <li key={fe}>{fe}</li>
                        ))}
                    </ul>
                </div>
                <div className="border-4 p-8 pt-2 rounded-2xl shadow-inner shadow-white">
                    <p className="underline font-bold pb-2 text-2xl">Back End</p>
                    <ul className="list-none space-y-2">
                        {backend.map((be) => (
                            <li key={be}>{be}</li>
                        ))}
                    </ul>
                </div>
                <div className="border-4 p-8 pt-2 rounded-2xl shadow-inner shadow-white">
                    <p className="underline font-bold pb-2 text-2xl">Other Tools</p>
                    <ul className="list-none space-y-2">
                        {otherTools.map((ot) => (
                            <li key={ot}>{ot}</li>
                        ))}
                    </ul>
                </div>
                <div className="border-4 p-8 pt-2 rounded-2xl shadow-inner shadow-white">
                    <p className="underline font-bold pb-2 text-2xl">Learning</p>
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
