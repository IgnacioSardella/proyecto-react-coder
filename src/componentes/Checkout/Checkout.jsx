import React from 'react'
import './Checkout.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import { createOrdenCompra } from '../../assets/firebase';
import '../Cart/Cart.css'

const Checkout = () => {

    const datosFormulario = React.useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        const dataForm = new FormData(datosFormulario.current)
        const value = Object.fromEntries(dataForm)
        JSON.stringify(value)
        console.log(value);
        createOrdenCompra(value, totalPrice(), Date.now()).then(orden => console.log(orden))
        e.target.reset()
    }
    const {cart, totalPrice} = useContext(CartContext)
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <form className='col-md-4 formCompra p-3 h-75 mt-3' onSubmit={consultarForm} ref={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" name='nombre' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sni" className="form-label">DNI</label>
                            <input type="text" className="form-control" name='dni' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electronico</label>
                            <input type="email" className="form-control" name='email' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name='direccion' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" name='phone' required />
                        </div>
                        <button type="submit" className="btn btn-success">Finalizar Compra</button>
                    </form>
                    <div className="col-md-6 offset-md-1 cart-container p-3">
                        {cart.map((producto, indice) => <div className="card cart-card my-3 mx-auto" key={indice}>
                            <div className="row g-0 ">
                                <div className="col-md-4">
                                    <img src={producto.img} className="img-fluid rounded-start img-cart" alt="..." />
                                </div>
                                <div className="col-md-6 ps-4">
                                    <div className="card-body ps-0">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-text">Cantidad: {producto.cant}</p>
                                        <p className="card-text">Precio unitario: {producto.precio}</p>
                                        <p className="card-text">Subtotal: {producto.precio * producto.cant}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        <div className="d-flex flex-column mt-5">
                            <p className="mx-auto totalPrice">Total: {totalPrice()}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Checkout