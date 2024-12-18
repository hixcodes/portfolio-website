import logo from '../assets/jdHickeyLogo.png'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter, FaXTwitter} from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="h-20 w-auto" alt="Logo"/>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/jd-hickey/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="LinkedIn">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/Shoxed/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub">
                    <FaGithub/>
                </a>
                <a href="https://www.instagram.com/jdhixx/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Instagram">
                    <FaInstagram/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;