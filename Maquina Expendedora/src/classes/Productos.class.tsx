import type { Producto } from "../interfaces/Productos.interface";

export class Productos implements Producto{
    name: string;
    price: number;
    quantity: number;
    sells: number;
    
    constructor(name: string, price: number, quantity: number, sells: number) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.sells = sells
    }
    
    
    public get quantity_() : number {
        return this.quantity
    }
    public get sells_(): number {
        return this.sells
    }
    public totalProductoVendido() {
        this.sells += this.price;
    }
    reducirStock(){
        this.quantity--;
    }
    
    
    
}