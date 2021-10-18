let producto = 0;
let cantidadProducto = 0;
let precio = 0;

class Pedido {
    constructor(producto, precio, cantidad) {
        this.producto = producto,
        this.cantidad = cantidad,
        this.precio = precio,
        this.descuento = 0,
        this.subTotal = 0,
        this.total = 0
    }

    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }

    calcularIva() {
        return this.subTotal * 0.21;
    }

    calcularDescuento() {
        if (this.subTotal >= 100000) {
            return this.subTotal * 0.10
        } else {
            return this.descuento * 0
        }
    }

    calcularTotal() {
        this.total = this.subTotal + this.calcularDescuento() + this.calcularIva();
    }
}

function pedidoProducto() {
    while(!producto || producto == 0 || producto > 3) {
        producto = parseInt(prompt("¿Qué máquina le gustaría comprar?:\n 1: Recta($70000)\n 2: Overlock($89000)\n 3: Collareta($120000)"));
    }

    switch (producto) {
        case 1:
            producto = "Recta";
            precio = 70000;
            break;
        case 2:
            producto = "Overlock";
            precio = 89000;
            break;
        case 3:
            producto = "Collareta";
            precio = 120000;
            break;
    }

    while(!cantidadProducto || cantidadProducto == 0){
        cantidadProducto = parseInt(prompt("Producto elegido: " + producto + "\n Introduzca la cantidad deseada. (solo números)"));
    }

    return new Pedido(producto, precio, cantidadProducto)
}

alert("Bienvenido/a a Casa Spahn");

const pedido = pedidoProducto();

pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularDescuento
pedido.calcularTotal();

alert("Cálculo del pedido:\n" + 
    "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad + "\n" + 
    "- IVA 21%: $" + pedido.calcularIva() + "\n" + 
    "- Descuento: $" + pedido.calcularDescuento() + "\n" + 
    "Total = $" + pedido.total
);

class Maquina {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const maquinas = [];

const maquina1 = new Maquina("Recta", "70000");
maquinas.push(maquina1)

const maquina2 = new Maquina("Overlock 3H", "89000");
maquinas.push(maquina2)

const maquina3 = new Maquina("Collareta", "120000");
maquinas.push(maquina3)

for(const maquina of maquinas)
    maquina.sumarIva();

console.log(maquinas);