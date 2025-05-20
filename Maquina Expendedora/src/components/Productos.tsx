import { useState } from "react";
import type { Productos as Product } from "../classes/Productos.class";


type ProductProps = {
    productos: Product[]
}

function Productos(prop: ProductProps) {
    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {prop.productos.map((producto) => (
                    <li>
                        <p>{`Producto: ${producto.name}`}</p>
                        <p>{`Precio: ${producto.price}`}</p>
                        <p>{`Cantidad: ${producto.quantity_}`}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Productos;