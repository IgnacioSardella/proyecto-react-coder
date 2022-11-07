import React from "react"
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
    return (
        <div className="row g-0 p-2 col-12">
            <div className="col-md-6 pt-2">
                <img src={producto.img} className="img-fluid rounded" alt="" />
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h4 className="card-title">{producto.nombre}</h4>
                    <p className="card-text">{producto.tipo}</p>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <p className="card-text">Quedan: {producto.stock}</p>
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail