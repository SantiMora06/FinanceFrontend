import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "../styles/header.module.css";
import Logo from "../assets/LogoNoBackGround.png"

const Header = () => {
    const [activeLink, setActiveLink] = useState("Portfolio"); // Por defecto, el primer enlace

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName); // Cambia el enlace activo cuando se clickea
    };

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarLogo}>
                <Link to="/"> <img src={Logo} alt="Logo" className={classes.img} /> </Link>
                <ul className={classes.navbarLinks}>
                    <li className={classes.navbarLink}>
                        <Link
                            className={activeLink === "Portfolio" ? classes.active : ""}
                            onClick={() => handleLinkClick("Portfolio")}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className={classes.navbarLink}>
                        <Link
                            className={activeLink === "Wishlist" ? classes.active : ""}
                            onClick={() => handleLinkClick("Wishlist")}
                        >
                            Wishlist
                        </Link>
                    </li>
                    <li className={classes.navbarLink}>
                        <Link
                            className={activeLink === "Transactions" ? classes.active : ""}
                            onClick={() => handleLinkClick("Transactions")}
                        >
                            Transactions
                        </Link>
                    </li>
                    <li className={classes.navbarLink}>
                        <Link
                            className={activeLink === "About" ? classes.active : ""}
                            onClick={() => handleLinkClick("About")}
                        >
                            About
                        </Link>
                    </li>
                    <li className={classes.navbarLink}>
                        <Link
                            className={activeLink === "Blog" ? classes.active : ""}
                            onClick={() => handleLinkClick("Blog")}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className={classes.navbarLink}>
                        <Link
                            className={activeLink === "Contact" ? classes.active : ""}
                            onClick={() => handleLinkClick("Contact")}
                        >
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>
            <div className={classes.navauth}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
};

export default Header;
