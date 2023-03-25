import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import "./AddNote.css"
import image from "../Assets/bg2.jpg"
import { Form } from "react-router-dom";

const AddNote = () => {
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [message,setMessage] = useState("")
    const handleAddNote = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title" , title)
        formData.append("description" , description)

        const token = sessionStorage.getItem("token")
        console.log(token)
        fetch("https://notetaker-9wnz.onrender.com/note" , {
            method:"POST",
            headers:{Authorization : token},
            body:formData
        })
        .then(res => res.json())
        .then(data => setMessage(data.status))

    }

    useEffect(() => {
        if(message){
            setTitle("")
            setMessage("")
            setDescription("")
        }
    })
    return (
        <div>
            <Navbar />
            <div className="addnote-con" >
                <img src={image} alt="image" className="bg-image" />
                <div className="note-con" >
                    <div className="title-div" >
                        <label htmlFor="title" ><h3>Title:</h3></label>
                        <input type="text" id="title" 
                        onChange={(e)=>{setTitle(e.target.value)}}
                        placeholder="Please Enter Title" />
                    </div>
                    <div className="desc-div" >
                        <label htmlFor="desc" ><h3>Description:</h3></label>
                        <textarea type="text" id="desc" 
                        onChange={(e) => {setDescription(e.target.value)}} /> 
                    </div>
                    <button className="add-btn" onClick={(e)=>handleAddNote(e)} >Add Note</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote;