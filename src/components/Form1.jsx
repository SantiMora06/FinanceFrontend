import classes from "../styles/form.module.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Form1 = () => {
    const [formType, setFormType] = useState(null); // 'register' or 'login'

    const handleFormToggle = (type) => {
        if (formType === type) {
            setFormType(null);
        } else {
            setFormType(type);
        }
    };

    // Add or remove blur class from body
    useEffect(() => {
        if (formType) {
            document.body.classList.add(classes.blur);
        } else {
            document.body.classList.remove(classes.blur);
        }
    }, [formType]);

    return (
        <>
            <div className={classes.navauth}>
                <Link to="#" onClick={() => handleFormToggle('register')}>Register</Link>
                <Link to="#" onClick={() => handleFormToggle('login')}>Login</Link>
                {formType && (
                    <div className={`${classes.form} ${formType ? classes.show : ""}`}>
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
                )}
            </div>
        </>
    );
};

export default Form1;
