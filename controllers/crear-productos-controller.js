import { productoServices } from "../servicios/productos-servicios.js";

const form=document.querySelector("[data-form]")
form.addEventListener("submit",(evento) => {
    evento.preventDefault();

    const title=document.querySelector("[data-name]").value
    const images=document.querySelector("[data-url]").value
    const description=document.querySelector("[data-descripcion]").value
    const price =document.querySelector("[data-price]").value
    const categoryId =1;
    
    productoServices.creaproducto(title,price, description,categoryId,images).then(respuesta=>{
        window.location.href="/index.html"
        alert("El producto fue guardado con exito")
        
        console.log(respuesta)
    }).catch(err=>{
        console.log(err)
    })
})