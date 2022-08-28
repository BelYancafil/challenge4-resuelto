const form=document.querySelector("[data-form]");

form.addEventListener("submit",validar);
    
function validar(evento){
    evento.preventDefault();
    const nombreApellido = document.querySelector("[ data-nombreapellido]").value
    const mensaje=document.querySelector("[data-mensaje]").value

    if((nombreApellido=="")){
        alert("Debe ingresar un nombre")
            return
    }else{
        if(mensaje==""){
            alert("Debe ingresar un mensaje")
            return
        }else{
            if(nombreApellido.length>40){
                alert("El nombre no debe tener mas de 40 caracteres")
                return
            }else{
                if(mensaje.length>10){
                    alert("El mensaje no debe tener mas de 80 caracteres")
                    return
                }else{
                    document.querySelector("[ data-nombreapellido]").value=""
                    document.querySelector("[data-mensaje]").value=""
                    return alert ("Mensaje guardado, le responderemos a la brevedad")
                }
            }
    }

    }
}