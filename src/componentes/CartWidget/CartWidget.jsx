import { Link } from "react-router-dom";


const CartWidget = ({clases}) => {
    return (
        <>
            <Link className="nav-link" to="/cart">
                <button className={clases}>🛒</button>
            </Link>
        </>
    );
}

export default CartWidget;
