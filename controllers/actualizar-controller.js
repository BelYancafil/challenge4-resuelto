import { productoServices} from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");
const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 
    const imagenUrl = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-price]");
    const descripcion = document.querySelector("[data-descripcion]");
    const inputId=document.querySelector("[data-id]")
    try{
        console.log (id, imagenUrl.value,nombre.value, precio.value,descripcion.value,inputId.value);
        const perfil = await productoServices.detalleProducto(id);
            nombre.value = perfil.title;
            imagenUrl.value = perfil.images;
            precio.value = perfil.price;
            descripcion.value = perfil.description;
            inputId.value=id;

        }catch(error){
        
    }
    
}
obtenerInformacion();

try{
    form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = document.querySelector("[data-id]").value;
    const images = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-descripcion]").value;
    const categoryId=1;
        
    productoServices.actualizarProducto(title,  price,  description, categoryId,images, id).then(()=>{
        window.location.href = "/administrador.html"
        alert("Los cambios fueron realizados con exito")
        
    })
    
})
}catch(error){
        
}
