import './App.css';
import {BrowserRouter, Route , Routes} from "react-router-dom"
import LandingPage from './Components/LandingPage/LandingPage';
import Register from './Components/LandingPage/Register';
import Home from './Components/HomePage/HomePage';
import AddNote from './Components/AddNote/AddNote';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/Addnote" element={<AddNote/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
