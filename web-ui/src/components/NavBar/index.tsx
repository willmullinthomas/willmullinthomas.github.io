import "./NavBar.css";
import { AppRoute } from "../../utils/AppRoute";
import NavBarLink from "../NavBarLink";
import { faHome, faBriefcase, faFolder } from "@fortawesome/free-solid-svg-icons";

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
        </div>
    );
}

export default NavBar;