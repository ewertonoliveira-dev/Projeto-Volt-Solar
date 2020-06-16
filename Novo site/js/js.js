    function fecharlogin(){
        login.style.display = "none"
        tampa.style.display = "none"
        finan.style.display = "none"
        bemvindo.style.display = "none"
        corpin.style.position = "fixed";      
    }
    function financeiro(){
        finan.style.display = "block"
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
    function logar() {
        login.style.display = "block";
        tampa.style.display = "block";
    }
    function fechar() {
        login.style.display = "none";
        finan.style.display = "none"
        corpin  .style.position = "relative";
        tampa.style.display = "none"
        bemvindo.style.display = "none"
    }