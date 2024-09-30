// Render Prop
import classes from "../styles/form.module.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Form1 = () => {

    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    }
    return (<>

        <div className={classes.navauth}>
            <Link to="#" onClick={toggleForm}>Login</Link>
            <Link to="#">Register</Link>
            {showForm && (
                <div className={`${classes.form} ${showForm ? classes.show : ""}`}>
                    <form method="post">
                        <label>Username:</label>
                        <input type="text" placeholder="Username" name="username" id="username" />
                        <label>Email:</label>
                        <input type="email" placeholder="Email" name="email" id="email" required />
                        <label htmlFor="userPassword" >Password:</label>
                        <input type="password" autoComplete="current-password" required />
                        <label>Remember me?</label>
                        <fieldset className={classes.fieldset}>
                            <label> Yes <input type="radio" value="Yes" name="radio" />  </label>
                            <label> No<input type="radio" value="No" name="radio" />  </label>
                        </fieldset>
                        <input type="submit" value="Login" />
                    </form>

                </div>
            )}


        </div></>
    )
}

export default Form1;