import { Maquina } from "../classes/Maquina..class";
import Productos from "../components/Productos";
import { Productos as Producto } from "../classes/Productos.class";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProductosContext } from "../utils/Context";

function Home() {
    const context = useContext(ProductosContext)
    const productos = context!.productos
    const setProductos = context!.setProductos
    const maquina = new Maquina(30)
    
    
    // const [productos, setProductos] = useState([
    //     new Producto('Sabritas', 20, 5, 0),
    //     new Producto('Ruffles', 22, 3, 0),
    //     new Producto('Donas', 10, 10, 0)
    // ])

    
    const nombreRef = useRef<HTMLInputElement>(null)
    const dineroRef = useRef<HTMLInputElement>(null)

    
    let indice: number

    function handleClick() {
        const productoEscogido = productos.
            filter((producto, index) => {
                const buscarIndex = producto.name.toLowerCase() === nombreRef.current?.value.toLowerCase()
                if(buscarIndex) indice = index
                return buscarIndex
            })
        [0]
        if (productoEscogido) {
            maquina.vender(productoEscogido, Number(dineroRef.current?.value))
            setProductos(prevProduct => 
                prevProduct.map((item, i) => (i === indice ? new Producto(item.name, item.price, item.quantity_, item.sells_) : item))
            )
            console.log('Venta Exitosa')
            console.log(maquina.dineroTotal_)
        }
    }


    return (
        <div>
            <h1>Maquina Expendedors</h1>
            <h1>Ver la consola del navegador</h1>
            <div>
                <input type="text" ref={nombreRef} placeholder="Nombre del producto" />
                <input type="text" ref={dineroRef} placeholder="Dinero ingresado" />
            </div>

            <button onClick={handleClick}>Procesar Compra</button>
            <div><Link to={"/ventas"}><button>Ver Ventas</button></Link></div>
            

            <Productos productos={productos} />

        </div>
    );
}

export default Home;