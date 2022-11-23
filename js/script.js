"use strict"

let btnCrearBotones=document.querySelector(".crearBotones");
let btnReiniciar=document.querySelector(".reiniciar");

btnCrearBotones.addEventListener("click",crearBotones);
btnReiniciar.addEventListener("click",reiniciar);

function crearBotones(){
    let numBotones=document.querySelector(".inputNBotones").value;
    for(let i=0;i<numBotones;i++){
        let nuevoBoton=document.createElement("BUTTON");
        let colorAleatorio=`rgb(${aleatorio(0,255)},${aleatorio(0,255)},${aleatorio(0,255)})`;
        nuevoBoton.addEventListener("click",cambiarColor);
        nuevoBoton.textContent=colorAleatorio;
        nuevoBoton.setAttribute("style","background-color:"+colorAleatorio);
        nuevoBoton.classList.add("nuevoBoton");
        btnCrearBotones.insertAdjacentElement("afterend",nuevoBoton);
    }

}

function cambiarColor(){

    document.body.setAttribute("style","background-color:"+this.textContent);
}

function reiniciar(){
    let nuevosBotones=document.querySelectorAll(".nuevoBoton");
    nuevosBotones.forEach(item=>{
        item.remove();
    });
    document.body.setAttribute("style","background-color:rgb(255,255,255)");
    document.querySelector(".inputNBotones").value="";

}

function aleatorio(min,max){
    return Math.round(Math.random() * (max - min) + min); 
}



