import './itemCount.css'
import {useState} from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const modificarContador = (operacion) =>{
        if (operacion === "+") {
            setContador(contador + 1)
        } else{
            if (contador > 1)
                setContador(contador - 1)
        }
    }

    const onAdd = (productos) => {
        if (productos === 1) {
            alert(`Agregaste ${productos} producto al carrito`);
        } else if (productos < 11){
            alert(`Agregaste ${productos} productos al carrito`);
        } else{
            alert('No hay suficiente stock de ese producto');
            setContador(contador * 0 + 1)
        }
    }

    return (
        <div className='d-flex align-items-start flex-column'>
            <div className='d-flex align-items-center justify-content-center contador1'>
                <button onClick={() => modificarContador('-')} className='btn btn-light btn-primary my-2'>-</button>
                <span className="span-contador">{contador}</span>
                <button onClick={() => modificarContador('+')} className='btn btn-light btn-primary my-2'>+</button>
            </div>
            <button onClick={() => onAdd(contador)} className='btn btn-dark w-50'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount