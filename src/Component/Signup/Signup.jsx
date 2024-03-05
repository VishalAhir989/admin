import { Facebook, Google, Linkedin, XCircleFill } from "react-bootstrap-icons"
import React, { useState, useEffect } from "react";
import { usergooglewithsignin } from "../../service/Action/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const signin = () => {
    const [isSigninVisible, setSigninVisible] = useState(false);

    useEffect(() => {
        const delayMinutes = 1;
        const delayMilliseconds = delayMinutes * 2 * 1000;

        const showSigninAfterDelay = setTimeout(() => {
        setSigninVisible(true);
        }, delayMilliseconds);

        return () => clearTimeout(showSigninAfterDelay);
    }, []);

    const handleCloseButtonClick = () => {
        setTimeout(() => {
            setSigninVisible(false);
        }, 500);
    };



    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelgooglesignin = async () => {
        console.log('Before dispatch');
        await dispatch(usergooglewithsignin());
        console.log('After dispatch');
        handleCloseButtonClick(); // Close the login bar after successful sign-in
        navigate('/');
    };


    return(
        <>
        {isSigninVisible && (
            <section>
                <div id="signin" className="d-flex align-items-center">
                    <div className="close-button" onClick={handleCloseButtonClick}>
                        <span><XCircleFill/></span>
                    </div>
                    <div className="container">
                        <div className="row signin-main">
                            <div className="col-6 singin-img">
                                <img src="../../../../public/signup.png" alt="signin" />
                            </div>
                            <div className="col-6">
                                <div className="signin-form">
                                    <form>
                                        <label htmlFor="email">Email Address</label>
                                        <br />
                                        <input type="email" name="email" id="email" placeholder="Enter the Email" />
                                        <br />
                                        <label htmlFor="password">Password</label>
                                        <br />
                                        <input type="password" name="password" id="password" placeholder="Enter the Password" />
                                        <br />
                                        <div className="checkbox-signin d-flex align-items-center">
                                            <input type="checkbox" />
                                            <label htmlFor="password">Remember my preference</label>
                                        </div>
                                        <button type="submit" className="signin-button">Sign Me In</button>
                                    </form>
                                    <div className="signin-subtext-mian col-12 d-flex mt-3">
                                        <div className="col-3"></div>
                                        <div className="col-6 signin-subtext d-flex align-items-center justify-content-center">
                                            <span className="text-center">
                                                ---------- Continue With ---------- 
                                            </span>
                                        </div>
                                        <div className="col-3"></div>
                                    </div>
                                    <div className="d-flex col-12 justify-content-center">
                                        <button className="Facebookwithbutton d-flex align-items-center mt-4 mx-2"><span><Facebook/></span> Facebook</button>
                                        <button className="Googlewithbutton d-flex align-items-center mt-4 mx-2" onClick={handelgooglesignin}><span><Google/></span> Google</button>
                                        <button className="Linkedinwithbutton d-flex align-items-center mt-4 mx-2"><span><Linkedin/></span> linkedin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}
        </>
    )
}
export default signin