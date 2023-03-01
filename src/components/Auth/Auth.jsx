
import Image from "next/image";
import pic from "../../../public/pic.svg"
import logo from "../../../public/logo.svg";
import { useState } from "react";
import styles from "./SigIn.module.css";
import Router from "next/router";
import Interest from "../Interest.jsx";
import Login from "@/components/Auth/Login.jsx";
import SignUp from "@/components/Auth/SignUp.jsx"

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
        // setPopUp(true)
        console.log(e.target);
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

                    {!toLogin && <SignUp setLogin={setLogin} popUpHandler={popUpHandler}></SignUp>
                        
                    }



                    {toLogin && <div > <Login loginHandler={loginHandler}></Login></div>}



                </div>

                <div style={{ width: "50%" }}>
                    <Image alt="logo" style={{ width: "1000px", zIndex: "-1", position: "absolute", objectFit: "cover", backgroundRepeat: "no-repeat", overflow: "hidden", height: "100%" }} src={pic} />

                </div>
            </div>


        </>

    )



}