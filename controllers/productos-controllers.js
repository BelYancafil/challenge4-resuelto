import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (title, price, images,description) => {
    const caja = document.createElement("div");
    const contenido= `
    <div >
        <img class="caja__imagen" src="${images}"  href="#">
        <h3 class="linea__titulo">${title}</h3>
        <p class="linea__precio">$${price}</p>
        <p class="linea__descripcion">${description}</p>
    </div>`
    caja.innerHTML=contenido;
    caja.classList.add("caja")
    
    return caja
}
const productos=document.querySelector("[datos-productos]");

const render = async () => {
    try{       
        const listaProductos= await productoServices.listaProductos()        
        listaProductos.forEach(elemento => {
        productos.appendChild(nuevoProducto(elemento.title, elemento.price, elemento.images,elemento.description))
        
        });
    }catch(erro){
        console.log(erro)
    }

}
render()