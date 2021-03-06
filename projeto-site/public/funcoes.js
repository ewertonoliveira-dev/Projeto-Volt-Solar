let login_usuario;
let nome_usuario;
let imagem_usuario;
let fkEmpresa_usuario;
let sobrenome_usuario;

function redirecionar_login() {

}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    imagem_usuario = sessionStorage.imagem_usuario_meuapp;
    fkempresa_usuario = sessionStorage.fkempresa_usuario_meuapp;
    sobrenome_usuario = sessionStorage.sobrenome_usuario_meuapp;
    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        imagem_perfil.src = imagem_usuario;
        b_fkempresa.innerHTML = fkempresa_usuario;
        b_sobrenome.innerHTML = sobrenome_usuario;
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
    window.location.href = 'index.html';
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}