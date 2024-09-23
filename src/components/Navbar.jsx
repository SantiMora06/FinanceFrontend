import { Link } from "react-router-dom";
import classes from "../styles/header.module.css"

const Header = () => {
    return (<>
        <nav className={classes.navbar}>
            <div className={classes.navbarLogo}>
                <Link> <img /> </Link>
                <ul className={classes.navbarLinks}>
                    <li >Portfolio</li>
                    <li >Wishlist</li>
                    <li >Transactions</li>
                    <li >About</li>
                    <li >Contact</li>
                </ul>
            </div>
            <div className={classes.navauth}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>

    </>);
}

export default Header;