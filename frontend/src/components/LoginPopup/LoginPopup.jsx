import React, { useState } from 'react';
import './LoginPopup.css'; // Import CSS file
import { assets } from '../../assets/assets'; // Import assets

const LoginPopup = ({ setshowLogin }) => { 
    const [currState, setcurrState] = useState("Login"); // State for current login state

    return (
        <div className='login-popup'> {/* Login popup container */}
            <form className="login-popup-container"> {/* Login form container */}
                <div className="login-popup-title"> {/* Login title and close button */}
                    <h2>{currState}</h2> {/* Display login state (Login or Sign Up) */}
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" /> {/* Close button */}
                </div>
                <div className="login-popup-inputs"> {/* Login inputs */}
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />} {/* Display name input if Sign Up */}
                    <input type="email" placeholder='Your email' required /> {/* Email input */}
                    <input type="password" placeholder='Password' required /> {/* Password input */}
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button> {/* Login or Sign Up button */}
                <div className="login-popup-condition"> {/* Terms and conditions */}
                    <input type="checkbox" required /> {/* Checkbox for agreeing to terms */}
                    <p>By continuing, I agree to the terms of use & privacy policy.</p> {/* Terms and conditions text */}
                </div>
                {currState === "Login" /* Conditional rendering based on login state */
                    ? <p>Create a new account? <span onClick={() => setcurrState("Sign Up")}>Click here</span></p> /* Display Sign Up link */
                    : <p>Already have an account? <span onClick={() => setcurrState("Login")}>Login here</span></p> /* Display Login link */}
            </form>
        </div>
    );
};

export default LoginPopup;
