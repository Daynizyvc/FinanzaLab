const destinatario= document.getElementById("destinatario").value;
const monto=document.getElementById("monto").value;
const modalConfirm=document.getElementById("modal-yes");

let destinity = document.getElementById("destinity");
let montoConfirm = document.getElementById("monto-a");

const btnAcept=document.getElementById('btn-yes');
const btnConfirm=document.getElementById('btn-modal');


const showDate = () =>{
    modalConfirm.style.display="flex";
    modalConfirm.style.visibility="visible";
    modalConfirm.style.left="10px";
    modalConfirm.style.top="130px";

    destinity.innerHTML=destinatario;
    montoConfirm.innerHTML= "$" + " " + monto +".00";
    destinity.style.fontWeight="bold";
    montoConfirm.style.fontWeight="bold";
}

const occult = () =>{
    modalConfirm.style.display="none";
    modalConfirm.style.display="collapse";
}

btnAcept.addEventListener("click", showDate);
btnConfirm.addEventListener("click", occult);