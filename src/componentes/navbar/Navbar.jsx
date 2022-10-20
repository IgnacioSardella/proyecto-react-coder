import "./navbar.css"
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-brand btn btn-active px-lg-5 logo">Tu Deporte</button>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <button className='cart-widget btn px-4  mb-2 ms-1 d-lg-none'>🛒</button>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className='nav-link btn px-lg-4'>Adultos</button>
                    </li>
                    <li className="nav-item">
                        <button className='nav-link btn px-lg-4'>Niños</button>
                    </li>
                </ul>
                <FormBusqueda busqueda={"Buscar Productos"}/>
                </div>
                <button className='cart-widget btn px-4 mb-2 ms-1 d-none d-lg-block '>🛒</button>
            </div>
        </nav>

    );
}

export default Navbar;
