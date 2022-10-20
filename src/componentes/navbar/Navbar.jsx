import "./navbar.css"
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-brand btn btn-active px-lg-5 logo">Tu Deporte</button>
                <div>
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
