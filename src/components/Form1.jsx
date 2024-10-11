import classes from "../styles/form.module.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Form1 = () => {
    const [formType, setFormType] = useState(null);

    const handleFormToggle = (type) => {
        if (formType === type) {
            setFormType(null);
        } else {
            setFormType(type);
        }
    };

    // Add or remove blur and overlay based on form visibility
    useEffect(() => {
        if (formType) {
            document.body.classList.add(classes.blur);
        } else {
            document.body.classList.remove(classes.blur);
        }
    }, [formType]);

    return (
        <>
            <header className={classes.navauth}>
                <Link to="#" onClick={() => handleFormToggle('register')}>Register</Link>
                <Link to="#" onClick={() => handleFormToggle('login')}>Login</Link>
            </header>
            {formType && (
                <>
                    {/* Overlay that blurs the background */}
                    <div className={classes.overlay}></div>

                    {/* Form container */}
                    <div className={`${classes.form} ${classes.show}`}>
                        <form method="post">
                            <label>Username:</label>
                            <input type="text" placeholder="Username" name="username" id="username" required />
                            {formType === 'register' && (
                                <>
                                    <label>Email:</label>
                                    <input type="email" placeholder="Email" name="email" id="email" required />
                                </>
                            )}
                            <label htmlFor="userPassword">Password:</label>
                            <input type="password" autoComplete="current-password" required />
                            {formType === 'register' && (
                                <>
                                    <label>Remember me?</label>
                                    <fieldset className={classes.fieldset}>
                                        <label> Yes <input type="radio" value="Yes" name="radio" /> </label>
                                        <label> No <input type="radio" value="No" name="radio" /> </label>
                                    </fieldset>
                                </>
                            )}
                            <input type="submit" value={formType === 'login' ? 'Login' : 'Register'} />
                        </form>
                    </div>
                </>
            )}
        </>
    );
};

export default Form1;
