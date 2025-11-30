import "./Header.css"
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Actividades from "./Actividades";
import Codigo from "./Codigo";
import Sistema from "./Sistema";
import Modificaciones from "./Modificaciones";
import Home from "./Home";

export default function HeaderOptions() {
    return (
        <BrowserRouter>
    <nav id="navMenu">
        <Link to="/home" className="link">Home</Link>
        <Link to="/actividades" className="link">Actividades</Link> {" "}
        <Link to="/codigo" className="link" >Codigo</Link> {" "}
        <Link to="/sistema" className="link">Sistema</Link>
        <Link to="/modificaciones" className="link">Modificaciones</Link>
        
    </nav>

    <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="actividades" element={<Actividades/>}></Route>
        <Route path="codigo" element={<Codigo/>}></Route>
        <Route path="sistema" element={<Sistema/>}></Route>
        <Route path="modificaciones" element={<Modificaciones/>}></Route>
        
    </Routes>

  </BrowserRouter>
    );
}
