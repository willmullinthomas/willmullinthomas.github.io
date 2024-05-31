import "./NavBar.css";
import { AppRoute } from "../../utils/AppRoute";
import NavBarLink from "../NavBarLink";
import { faHome, faBriefcase, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavBarProps = {

}

const NavBar: React.FC<NavBarProps> = props => {

    return (
        <div className="nav-bar">
            <div className="nav-left">
                <NavBarLink 
                    route={AppRoute.Home} 
                    content="Home" 
                    icon={faHome} 
                />
                <NavBarLink 
                    route={AppRoute.Experience} 
                    content="Experience" 
                    icon={faBriefcase}
                />
                <NavBarLink 
                    route={AppRoute.Portfolio} 
                    content="Portfolio" 
                    icon={faFolder}
                />
                <NavBarLink 
                    route={AppRoute.About} 
                    content="About" 
                    icon={faUser}
                />
            </div>
            <div className="nav-right">
                <a href="https://www.linkedin.com/in/thomasmwilliam/" target="_blank" rel="noreferrer" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="nav-right-icon"/>
                </a>
                <a href="https://github.com/willmullinthomas" target="_blank" rel="noreferrer" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="nav-right-icon"/>
                </a>
            </div>
        </div>
    );
}

export default NavBar;