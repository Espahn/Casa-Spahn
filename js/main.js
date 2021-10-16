let total = 0;

function agregarAlCarrito() {

    do {
        let producto = prompt("¿Quieres comprar una máquina Gemsy Recta, Gemsy Overlock o Gemsy Collareta?", "Ej: Gemsy Recta");
        let cantidad = parseInt(prompt("¿Cuántas quieres comprar?", 0));

        let precio = 0;

        switch (producto) {
            case "Gemsy Recta":
                precio = 70000;
                break;
            case "Gemsy Overlock":
                precio = 89000;
                break;
            case "Samsung Collareta":
                precio = 120000;
                break;
            default:
                alert("Algunos de los datos ingresados no es correcto");
                precio = 0;
                cantidad = 0;
            }

            total = total + precio * cantidad;
            otroProducto = confirm("¿Quieres agregar otro producto?");
        } while(otroProducto);
}

function aplicarIva(total){
    if(total >= 1) {
        total = total * 1.21;
    }

    return total;
}

function aplicarDescuento(total){
    if(total >= 100000) {
        total = total * 0.90;
        alert("El total de tu compra es $"+total);
    }

    return total;
}

agregarAlCarrito ();
aplicarDescuento(aplicarIva(total));