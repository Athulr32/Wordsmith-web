
import Image from "next/image";
import pic from "../../../public/pic.svg"
import logo from "../../../public/logo.svg";
import { useState } from "react";
import styles from "./SigIn.module.css";
import Router from "next/router";
import Interest from "../Interest.jsx";
export default function SignIn() {


    const [toLogin, setToLoginIn] = useState(false);
    const [popUp, setPopUp] = useState(false);

    function setLogin() {

        setToLoginIn(true)
    }


    function loginHandler() {

        //Check credential is correct

        Router.push("/landing")

    }

    function popUpHandler(e) {

        e.preventDefault()
        //Check credentials are correct
        setPopUp(true)
    }

    return (
        <>


            {popUp && <div className={styles.modal}></div>}
            
            {
                popUp && <div style={{ position: "absolute", left: "700px", zIndex: 2 }}>

                    <Interest></Interest>
                </div>
            }

            <div className="flex" style={{ height: "100%", overflow: "hidden" }}>

                <div style={{ backgroundColor: "#FFFFFF", width: "50%", boxShadow: "0px 10px 37px -1px #00000040" }}>

                    <div style={{ padding: "90px 0px 50px 90px" }}>
                        <Image src={logo} width={70} height={70} />
                        <div style={{ fontSize: "10px", position: "relative", left: "10px" }}>Wordsmith</div>
                    </div>

                    {!toLogin &&
                        <div style={{ padding: "0px 250px 100px 250px " }}>

                            <div className="py-8">
                                <div>
                                    <h1 style={{ fontSize: "30px", fontWeight: "bold", padding: "2px 2px 2px 0px" }}>Create an Account</h1>
                                </div>
                                <div>
                                    Already have an account? <span onClick={setLogin}>Login</span>
                                </div>
                                <div style={{ padding: "10px 0px 10px 0px" }}>
                                    Social Login
                                </div>
                                <div className="mb-4">
                                    <span style={{ display: "inline-block", width: "200px", height: "2px", backgroundColor: "grey" }}></span> <span style={{ paddingTop: "10px", display: "inline-block" }}>Or</span> <span style={{ display: "inline-block", width: "220px", height: "2px", backgroundColor: "grey" }}></span>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <form onSubmit={popUpHandler}>

                                        <div className="flex">
                                            <div style={{ paddingRight: "10px" }}>
                                                <input style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px", width: "100%" }} placeholder="First name" />
                                            </div>

                                            <div>
                                                <input style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px", width: "100%" }} placeholder="First name" />
                                            </div>
                                        </div>

                                        <div className="py-5">
                                            <input placeholder="Email" style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px" }} />

                                        </div>

                                        <div>

                                            <input placeholder="Passowrd" style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px" }} />

                                        </div>

                                        <div className="py-5">

                                            <button style={{ backgroundColor: "#00C1A2", padding: "10px", width: "100%", color: "white" }}>Create Account</button>

                                        </div>

                                        <div>
                                            By continuing,you agree to Terms of Service and Privacy Policy
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    }



                    {toLogin && <div onClick={loginHandler}> Login</div>}



                </div>

                <div style={{ width: "50%" }}>
                    <Image alt="logo" style={{ width: "1000px", zIndex: "-1", position: "absolute", objectFit: "cover", backgroundRepeat: "no-repeat", overflow: "hidden", height: "100%" }} src={pic} />

                </div>
            </div>


        </>

    )



}