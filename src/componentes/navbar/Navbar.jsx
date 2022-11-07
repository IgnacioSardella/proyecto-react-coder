import "./navbar.css"
import { Link } from "react-router-dom";
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Secciones from "./Secciones/Secciones";
import CartWidget from "../CartWidget/CartWidget";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <button className="navbar-brand btn px-lg-5 logo">Tu Deporte</button>
                </Link>
                <div className="d-flex ms-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <CartWidget clases={"cart-widget btn px-4 mb-2 ms-1 d-lg-none"}/>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Secciones/>
                <FormBusqueda busqueda={"Buscar Productos"}/>
                </div>
                <CartWidget clases={"cart-widget btn px-4 mb-2 ms-1 d-none d-lg-block"}/>
            </div>
        </nav>
    );
}

export default Navbar;
