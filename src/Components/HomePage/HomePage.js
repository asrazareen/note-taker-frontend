import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import './HomePage.css'
import image from '../Assets/bg2.jpg'
import "./HomePage.css";
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Home = () => {

    const [data, setData] = useState([])
    const [all, setAll] = useState([])
    useEffect(() => {

        const token = sessionStorage.getItem("token")
        fetch(`https://notetaker-9wnz.onrender.com/note`, {
            headers: { Authorization: token }
        })
            .then(res => res.json())
            .then(data => setData(data.data))


    }, [])

    // useEffect(() => {
    //     const id = data
    //     const token = sessionStorage.getItem("token")
    //     fetch(`http://localhost:8090/note/${id}`,{
    //         headers:{Authorization:token}
    //     })
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[all])
    return (
        <div>
            <Navbar />
            <div className="main-home-con" >
                <img src={image} alt="image" className="bg-image" />
                <div className="home-con" >
                    <div className="search-div" >
                        <SearchIcon />
                        <input type="text" placeholder="Search" className="search" />
                    </div>
                    <div className="note-content" >
                        {console.log(data)}
                        {data.map((details, index) => {
                              {console.log(details)}
                            return (
                              
                                <div className="note-div" key={index} >
                                    <div className="date" >
                                        <AccessTimeFilledIcon/>
                                        <h6>{details.date}</h6>
                                    </div>
                                    <div>
                                        <h3>{details.title}</h3>
                                        </div>
                                        <div>
                                            <p>
                                                {details.description.substring(0,20) + "..."}
                                            </p>
                                            </div>
                                </div>
                            )
                        })}

                        {/* <div className="note-div" >

                        </div>
                        <div className="note-div" >

                        </div>
                        <div className="note-div" >

                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;