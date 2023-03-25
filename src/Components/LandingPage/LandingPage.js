import React,{useEffect, useState} from "react";
import "./LandingPage.css";
import bgImage from "../Assets/bg.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage] = useState("")
    const [token,setToken] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("email" , email)
        formData.append("password",password)

        const res = await fetch("https://notetaker-9wnz.onrender.com/user/login" , {
            method:"POST",
            body:formData
        })

        const response = await res.json()
        setToken(response.token)
        setMessage(response.message)

    }
     useEffect(() => {
        if(token){
            sessionStorage.setItem("token" , token)
            navigate("/home")
            setEmail("")
            setPassword("")
        }
     },[token])
     useEffect(() => {
        if(message){
            console.log(message)
        }
     },[message])
    return (
        <div className="main-con" >
            <img src={bgImage} alt="bgImage" className="bg-image" />
            <div className="page-con">
                <div>
                    <h1>Welcome to out Note Taker Application.</h1>
                    <h2>Please Login to Continue.</h2>
                </div>
                <div className="login-con" >
                    <div className="login-main" >
                        <tr>
                            <td>
                                <label htmlFor='email' className="name" >UserName:</label>
                            </td>
                            <td>
                                <input type="text" id="email" className="name" placeholder="Please Enter Email" 
                                onChange={(e) => {setEmail(e.target.value)}}
                                 />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password" className="password" >Password:</label>
                            </td>
                            <td>
                                <input type="password" id="password" className="password" placeholder="Please Enter Password" 
                                onChange={(e) => {setPassword(e.target.value)}}
                                />
                            </td>
                        </tr>

                        <button className="login-btn register-btn" onClick={(e) => {handleLogin(e)}} >
                            Login
                        </button>
                        <p className="text" >Don't have an Account? Please <span onClick={()=>{navigate("/register")}}
                         >Register.</span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LandingPage