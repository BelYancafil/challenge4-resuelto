
const listaProductos =()=> fetch('https://api.escuelajs.co/api/v1/products')
.then(respuesta=>respuesta.json());




const eliminarProducto = (id) => {
    console.log("Eliminar a --> ", id);
    return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE"

    })
}

const creaproducto = (title,  price,description,categoryId,images ) => {
    const data={
        
         "title": title,
         "price": price,
         "description": description,
         "categoryId": categoryId,
         "images": [images] 
    }
    console.log(data)
    return fetch ('https://api.escuelajs.co/api/v1/products/',{
        method: 'POST',
        mode: 'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
})

.then (respuesta=> {
    if(respuesta.ok){
        respuesta.body
    }else{
    throw new Error ("no se agrego")
    }
})
}

const actualizarProducto = (title,  price,  description, categoryId,images, id) => {
    const data={
        
        "title": title,
        "price": price,
        "description": description,
        "categoryId": categoryId,
        "images": [images] 
   }
    return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method : "PUT",
    mode: 'cors',
    credentials:'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

}).then((respuesta) => respuesta)
.catch((err) => console.log(err));
};

const detalleProducto = (id) =>{
    if(id==null){
        return
    }else{
        return fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then ( respuesta => respuesta.json()); 
}}

export const productoServices= {
    listaProductos,
    creaproducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
}