const form=document.querySelector("[data-form-login]");

form.addEventListener("submit",validar);    
    
function validar(evento){
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value
    const pass=document.querySelector("[data-pass]").value 

    if (email=="Admin@admin.com"&& pass=="pass"){
        document.querySelector("[data-email]").value=""
        document.querySelector("[data-pass]").value =""
        return(window.location.href="./administrador.html")
        
    }else{
        alert("Email o contraseña incorrectos")
        return
    }

}