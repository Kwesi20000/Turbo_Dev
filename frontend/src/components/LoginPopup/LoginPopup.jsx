import React, { useContext, useState } from 'react';
import './LoginPopup.css'; // Import CSS file
import { assets } from '../../assets/assets'; // Import assets
import { StoreContext } from '../../context/StoreContext';
import axios from'axios'

const LoginPopup = ({ setshowLogin }) => { 

    const {url,setToken} = useContext(StoreContext)

    const [currState, setcurrState] = useState("Login"); // State for current login state
    const [data,setData] = useState({
        name:"",
        email:"",
        pasword:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currState==="Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if (response.data.success) {
            setToken(respons.data.token);
            localStorage.setItem("token",response.data.token);
            setshowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup'> {/* Login popup container */}
            <form onSubmit={onLogin} className="login-popup-container"> {/* Login form container */}
                <div className="login-popup-title"> {/* Login title and close button */}
                    <h2>{currState}</h2> {/* Display login state (Login or Sign Up) */}
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" /> {/* Close button */}
                </div>
                <div className="login-popup-inputs"> {/* Login inputs */}
                    {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />} {/* Display name input if Sign Up */}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required /> {/* Email input */}
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required /> {/* Password input */}
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button> {/* Login or Sign Up button */}
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
