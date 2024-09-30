import {NavLink} from "react-router-dom";

const Navbar = () => {

    return(
        <div>
            <ul>
                <li><NavLink to={"/main"}>home</NavLink></li>
                <li><NavLink to={"/menu"}>menu</NavLink></li>
                <li><NavLink to={"/order"}>order</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;