import type { Productos } from "./Productos.class";

export class Maquina {
    dineroVentas: number = 0
    dineroTotal: number;

    constructor(dineroTotal: number){
        this.dineroTotal = dineroTotal
    }
    
    public get dineroTotal_() : number {
        return this.dineroTotal
    }
    
    
    public reducirDinero(precio: number) : number {
        return this.dineroTotal-precio
    }
    

    vender(producto: Productos, pago: number) {
        if (this.checharStock(producto)) {
            if (this.procesarPago(pago) && pago>=producto.price) {
                producto.reducirStock()
                this.dineroTotal-=producto.price
                console.log("Producto vendido")
                this.dineroVentas += producto.price;
                producto.totalProductoVendido()
            }
            else{
                console.log('Sin fondos o sin cambio o pago menor al costo del prodcuto')
            }
        }
        else {
            console.log("Sin stock")
        }
    }
    checharStock(producto: Productos) {
        return producto.quantity <= 0 ? false : true;
    }
    procesarPago(pago: number) {
        return (this.dineroTotal - pago) < 0 ? false : true
    }

}