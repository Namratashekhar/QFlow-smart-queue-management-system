import { createRoot } from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Services from "./views/Services/Services";
import Queue from  "./views/Queue/Queue";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/queue" element={<Queue />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

  </Routes>
  </BrowserRouter>
);
