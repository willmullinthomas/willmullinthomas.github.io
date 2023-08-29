import { NavLink } from "react-router-dom";
import { AppRoute } from "../../utils/AppRoute";
import "./NotFound.css";

function NotFound() {

    return (
        <div className="not-found-container">
            <h1>Not Found</h1>
            <h3>The page you are looking for does not exist</h3>
            <NavLink to={`/${AppRoute.Home}`}>Take me home</NavLink>
        </div>
    );

}

export default NotFound;