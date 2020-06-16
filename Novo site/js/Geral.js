function financeiro(){
    finan.style.display = "block"
    tampa.style.display = "block"
    corpo.style.position = "fixed";
}   
window.onscroll = function () { fmenu() };
window.onscroll = function () { fdesce() };
var updown = document.getElementById("menu");
var sticky = updown.offsetTop;

function fmenu() {
    if (window.pageYOffset > sticky) {
        updown.classList.add("sticky");
    }
    else {
        updown.classList.remove("sticky");
    }
}
function fdesce() {
    if (window.pageYOffset > sticky) {
        linkseta.href = "#menu";
        imgupdown.src = "icones/up.png";
    }
    else {
        linkseta.href = "#rodape";
        imgupdown.src = "icones/down.png";
    }
}
function calcular() {
    var placas = Number(num_placa.value);
    var preco_placa = 400;
    var preco_final = preco_placa * placas;
    var desconto = preco_final * 0.25;
    var desconto_final = preco_final - desconto;

    if (preco_final >= 2000){
        div_mensagem.innerHTML = `O valor total da instalação do serviço na placa com desconto de 
                                R$${desconto.toFixed(2)} é de R$${desconto_final.toFixed(2)}.`
    }
    else{
    div_mensagem.innerHTML = `O valor total da instalação do serviço na placa é de R$${preco_final.toFixed(2)}.`
    }
var acc = document.getElementsByClassName("info");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block";
    }
});
}
}

function logar(){
    login.style.display = "block";
    corpo.style.position = "fixed";
    tampa.style.display = "block";
}
function fechar(){
    login.style.display = "none";
    finan.style.display = "none"
    corpo.style.position = "relative";
    tampa.style.display = "none";
}