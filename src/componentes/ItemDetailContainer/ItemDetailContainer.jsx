import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { consultarBDD } from "../../assets/funciones"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarBDD("../json/productos.json").then(productos => {
            const prod = productos.find(prodArray => prodArray.id === parseInt(id))
            setProducto(prod)
        })
    }, [])

    return (
        <div>
            <div className="container card mb-3 item-detail">
                <ItemDetail producto={producto}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer