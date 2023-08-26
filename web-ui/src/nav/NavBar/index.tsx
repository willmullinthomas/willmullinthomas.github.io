import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { AppRoute } from "../../utils/AppRoute";

type NavBarProps = {

}

type NavLinkClassArgs = {
    isActive: boolean, 
    isPending: boolean
}

const NavBar: React.FC<NavBarProps> = props => {

    const getClassName = (args: NavLinkClassArgs) => {
        return ""
    } 

    return (
        <div>
            <NavLink to={`/${AppRoute.Home}`} className={getClassName}>
                Home
            </NavLink>
            <NavLink to={`/${AppRoute.Resume}`} className={getClassName}>
                Resume
            </NavLink>
            <NavLink to={`/${AppRoute.Portfolio}`} className={getClassName}>
                Portfolio
            </NavLink>  
        </div>
    );
}

export default NavBar;