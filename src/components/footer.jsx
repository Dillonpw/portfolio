import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <footer className=" ml-3">
            <p id="credit1">Created by Dillon Walsh</p>{' '}
            <p>
                Feel free to reach out! <br></br>
                <p className="">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Dillonpwalsh10@gmail.com
                </p>
            </p>
            <p>
                More of me{' '}
                <a
                    className="mr-1"
                    id="github-link"
                    href="https://github.com/Dillonpw/projects"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="hover:scale-110 mr-2" icon={faGithub} />
                </a>
                <a
                    id="linkedin-link"
                    href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        className="hover:scale-110 mr-2"
                        icon={faLinkedinIn}
                    />
                </a>
            </p>
            <div className="copyr">
                &copy;<span id="year">2023</span> All Rights Reserved
            </div>
        </footer>
    );
}