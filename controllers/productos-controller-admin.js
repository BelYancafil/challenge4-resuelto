import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (title, price, images,id,description) => {
    const caja = document.createElement("div");
    const contenido= `
    <div class="caja__elemento" >
        <img class="caja__imagen" src="${images}"  href="#">
        <h3 class="linea__titulo">${title}</h3>
        <p class="linea__id">ID:${id}</p>
        <p class="linea__precio">$${price}</p>
        <p class="linea__descripcion">${description}</p>
        <div class="botones__edicion">
        <button class="boton__eliminar"  type="button" id="${id}">Eliminar</button>
        <a  href="./ver_producto.html?id=${id}"><button class="boton_editar">Editar</button></a>
    </div>
    </div>
`
   
    caja.innerHTML=contenido;
    caja.classList.add("caja")
    const btn = caja.querySelector("button")
    btn.addEventListener("click", () => {
        const id = btn.id;
        productoServices.eliminarProducto(id).then( respuesta =>{ 
        console.log(respuesta)
        alert("El producto fue eliminado")
        window.location.href = "/administrador.html"
      }).catch((err) => alert("Ocurrio un error"));

    });
     
    return caja
    
}
const productos=document.querySelector("[datos-productos]");

const render = async () => {
    try{       
        const listaProductos= await productoServices.listaProductos()        
        listaProductos.forEach(elemento => {
        productos.appendChild(nuevoProducto(elemento.title, elemento.price, elemento.images,elemento.id,elemento.description))
        
        });
    }catch(erro){
        console.log(erro)
    }

}
render()

