persiana = document.getElementById("persiana")
tacho = document.getElementById("tacho")
dispensador = document.getElementById("dispensador")
cerradura = document.getElementById("cerradura")

persiana.addEventListener("click",function(){
    agrego =`
    <div id="imagenes">
    <img src="media/persiana.png">
    <img src="media/hora.png">
    <img src="media/noche.png">
    </div>
    `
    guardar.innerHTML = agrego
})
dispensador.addEventListener("click",function(){
    agrego =`
        <div id="imagenes">
        <img src="media/dispensador.png">
        <img src="media/dia.png">
        </div>
    `
    guardar.innerHTML = agrego
})
cerradura.addEventListener("click",function(){
    agrego =`
    <div id="imagenes"><img src="media/cerradura.png"></div>
    `
    guardar.innerHTML = agrego
})
tacho.addEventListener("click",function(){
    agrego =`
        <div id="imagenes"><img src="media/tacho.png"></div> 
        `
    guardar.innerHTML = agrego
})