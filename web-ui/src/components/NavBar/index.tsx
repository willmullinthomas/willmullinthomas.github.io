import "./NavBar.css";
import { AppRoute } from "../../utils/AppRoute";
import NavBarLink from "../NavBarLink";
import { faHome, faBriefcase, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";

type NavBarProps = {

}

const NavBar: React.FC<NavBarProps> = props => {

    return (
        <div className="nav-bar">
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
    );
}

export default NavBar;