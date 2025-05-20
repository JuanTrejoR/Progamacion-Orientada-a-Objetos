import { createContext, useState, type ReactNode } from "react";
import { Productos } from "../classes/Productos.class";

interface ProductosContextType{
    productos: Productos[],
    setProductos: React.Dispatch<React.SetStateAction<Productos[]>>
}

interface ProductosProviderProps{
    children : ReactNode
}

export const ProductosContext = createContext<ProductosContextType | undefined>(undefined)

function ProductosProvider({children}: ProductosProviderProps) {
    const [productos, setProductos] = useState([
        new Productos('Sabritas', 20, 5, 0),
        new Productos('Ruffles', 22, 3, 0),
        new Productos('Donas', 10, 10, 0)
    ]);

    return ( 
        <ProductosContext.Provider value={{productos, setProductos}}>
            {children}
        </ProductosContext.Provider>
     );
}

export default ProductosProvider;