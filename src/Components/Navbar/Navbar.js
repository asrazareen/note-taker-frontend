import React from "react";
import "./Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="nav-main-con" >
            <div className="nav-con" >
            <div className="icon-div" 
            onClick={() => {navigate('/home')}}
             >
                <HomeIcon/>
                <h3>Home</h3>
            </div>
            <div className="icon-div" 
            onClick={() => {navigate("/Addnote")}}
              >
                <AddIcon/>
                <h3>Add Note</h3>
            </div>
            <div className="icon-div" >
                <ClearIcon/>
                <h3>Delete All</h3>
            </div>
            <div className="icon-div" 
            onClick={() => {window.print()}}
             >
                <ExitToAppIcon/>
                <h3>Export</h3>
            </div>
        </div>
        <div className="logout-div" 
        onClick={() => {
            const token = sessionStorage.removeItem("token")
            navigate("/")
        }}
         >
            <LogoutIcon/>
            <h3>Logout</h3>
        </div>
        </div>
        
    )
}

export default Navbar;