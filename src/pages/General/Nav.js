import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <ul className="nav">
            <li>
                <NavLink  to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink   to='Popular'>Popular</NavLink>
            </li>
            <li>
                <NavLink  to='Battle'>Battle</NavLink>
            </li>
        </ul>
    )
}

export default Nav;