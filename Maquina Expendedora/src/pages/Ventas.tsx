import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductosContext } from "../utils/Context";
import { Maquina } from "../classes/Maquina..class";

function Ventas() {
    const context = useContext(ProductosContext)
    const productos = context!.productos

    const totalDinero = productos.reduce((acc, curr) => acc + curr.sells_, 0);

    return (
        <div>
            <h1>VENTAS</h1>
            <Link to={"/"}><span>Volver</span></Link>
            <ul>
                {productos.map((producto) => (
                    <li>
                        <p>{`Producto: ${producto.name}`}</p>
                        <p>{`Ventas del producto: ${producto.sells_}`}</p>
                    </li>
                ))}
            </ul>
            
            <h2>{`Total de ventas: ${totalDinero}`}</h2>

        </div>
    );
}

export default Ventas;