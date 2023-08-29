import React from "react";
import "./NavBarLink.css";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../utils/AppRoute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type NavBarLinkProps = {
    route: AppRoute;
    content: string;
    icon: IconProp;
    className?: string;
}

type NavLinkClassArgs = {
    isActive: boolean, 
    isPending: boolean
}

const NavBarLink: React.FC<NavBarLinkProps> = props => {

    const getClassName = React.useCallback((args: NavLinkClassArgs) => {
        return `nav-link ${args.isActive ? "nav-link-active" : "nav-link-inactive"} ${props.className??""}`
    }, [props.className]);

    return (
        <NavLink to={`/${props.route}`} className={getClassName}>
            <div className="nav-link-content">
                { <FontAwesomeIcon icon={props.icon} /> }
                { props.content }
            </div>
        </NavLink>
    );
}

export default NavBarLink;
