import React, { useState, useEffect } from "react";
import bgImage from "../Assets/bg.jpg";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"

const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [checked, setChecked] = useState(false)
    const [status,setStatus] = useState("")
    const [message,setMessage] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name" , name)
        formData.append("email",email)
        formData.append("password" , password)
        formData.append("conPassword" , conPassword)

        const res = await fetch("https://notetaker-9wnz.onrender.com/user/register" , {
            method:"POST",
            body:formData
        })
        const response = await res.json()
        console.log(response.status)
        setStatus(response.status)
        setMessage(response.message)
    }
    useEffect(() => {
        setTimeout(() => {
            if(status === "Success"){
                navigate("/")
                setName("")
                setEmail('')
                setPassword("")
                setConPassword("")
                setMessage("")
            }
            else{
                setName("")
                setEmail('')
                setPassword("")
                setConPassword("")
                setMessage("")
            }
        },3000)
        
    },[message])
    return (
        <div>
            <div className="main-con" >
                <img src={bgImage} alt="bgImage" className="bg-image" />
                <div className="page-con">
                    <div>
                        <h1>Welcome to out Note Taker Application.</h1>
                        <h2>Please Login to Continue.</h2>
                    </div>
                    <div className="register-con" >
                        <div className="login-main" >
                            <tr>
                                <td>
                                    <label htmlFor='name' className="name" >UserName:</label>
                                </td>
                                <td>
                                    <input type="text" id="name" className="name"
                                        placeholder="Please Enter UserName"
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='email' className="name" >Email:</label>
                                </td>
                                <td>
                                    <input type="email" id="email" className="email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Please Enter Email" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password" className="password" >Password:</label>
                                </td>
                                <td>
                                    <input type="password" id="password" className="password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        placeholder="Please Enter Password" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="conpassword" className="password" >Confirm Password:</label>
                                </td>
                                <td>
                                    <input type="password" id="conpassword" className="password"
                                        onChange={(e) => { setConPassword(e.target.value) }}
                                        placeholder="Please Re-enter Password" />
                                </td>
                            </tr>
                            <div className="agree" >
                                <input type="checkbox" id="agree"
                                    onChange={() => {
                                        setChecked(!checked)
                                        //console.log(checked)
                                    }}
                                />
                                <label for="agree" >I agree to the Terms and Conditions</label>
                            </div>
                            {checked ? (
                                <button className="login-btn register-btn"  
                                onClick={(e) => {handleRegister(e)}}
                                > Register</button>

                            ) : (
                                <button className="login-btn" >Register</button>
                            )}
                            <p className="text"  >Already have a Account? Please <span onClick={() => { navigate("/") }}
                            >login.</span></p>






                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Register