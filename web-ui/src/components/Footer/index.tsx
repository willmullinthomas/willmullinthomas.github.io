import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

type FooterProps = {

}

const Footer: React.FC<FooterProps> = props => {
    return (
        <div className="footer-container">
            <p>2023</p>
            <a href="https://www.linkedin.com/in/thomasmwilliam/" target="_blank" rel="noreferrer" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
            </a>
            <a href="https://github.com/willmt80" target="_blank" rel="noreferrer" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="footer-icon"/>
            </a>
        </div>
    );
}

export default Footer;