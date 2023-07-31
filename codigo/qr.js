qr = document.getElementById("qr")
boton = document.getElementById("boton")

qr.addEventListener("click",function(){
    agrego =`
   <img src="media/qr final.png">
    `
    boton.innerHTML = agrego
})