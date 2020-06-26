function campo1() {
    var campo_primeironome = inp1.value;

    div_inp1.innerHTML = ''

    if (campo_primeironome.indexOf('@') >= 0 || campo_primeironome.indexOf('!') >= 0 || campo_primeironome.indexOf('#') >= 0 || 
    campo_primeironome.indexOf('$') >= 0 || campo_primeironome.indexOf('%') >= 0 || campo_primeironome.indexOf('¨¨') >= 0 || 
    campo_primeironome.indexOf('&') >= 0 || campo_primeironome.indexOf('*') >= 0 || campo_primeironome.indexOf('(') >= 0 || 
    campo_primeironome.indexOf(')') >= 0 || campo_primeironome.indexOf('-') >= 0 || campo_primeironome.indexOf('_') >= 0 || 
    campo_primeironome.indexOf('=') >= 0 || campo_primeironome.indexOf('+') >= 0 || campo_primeironome.indexOf('§') >= 0 || 
    campo_primeironome.indexOf('{') >= 0 || campo_primeironome.indexOf('[') >= 0 || campo_primeironome.indexOf('ª') >= 0 || 
    campo_primeironome.indexOf('}') >= 0 || campo_primeironome.indexOf(']') >= 0 || campo_primeironome.indexOf('º') >= 0 || 
    campo_primeironome.indexOf(';') >= 0 || campo_primeironome.indexOf(':') >= 0 || campo_primeironome.indexOf('.') >= 0 || 
    campo_primeironome.indexOf(',') >= 0 || campo_primeironome.indexOf('<') >= 0 || campo_primeironome.indexOf('>') >= 0 || 
    campo_primeironome.indexOf('?') >= 0 || campo_primeironome.indexOf('/') >= 0 || campo_primeironome.indexOf('°') >= 0 || 
    campo_primeironome.indexOf('|') >= 0 || campo_primeironome.indexOf('"') >= 0 || campo_primeironome.indexOf(' \ ') >= 0) {
        div_inp1.innerHTML='Nome inválido, não é permito caracteres como "@ ,# ,% ,! e etc."'
        return 0;
    }
    else {
        return 1;
    }
}

function campo2() {
    var campo_sobrenome = inp2.value;

    div_inp2.innerHTML = ''

    if (campo_sobrenome.indexOf('@') >= 0 || campo_sobrenome.indexOf('!') >= 0 || campo_sobrenome.indexOf('#') >= 0 || 
    campo_sobrenome.indexOf('$') >= 0 || campo_sobrenome.indexOf('%') >= 0 || campo_sobrenome.indexOf('¨¨') >= 0 || 
    campo_sobrenome.indexOf('&') >= 0 || campo_sobrenome.indexOf('*') >= 0 || campo_sobrenome.indexOf('(') >= 0 || 
    campo_sobrenome.indexOf(')') >= 0 || campo_sobrenome.indexOf('-') >= 0 || campo_sobrenome.indexOf('_') >= 0 || 
    campo_sobrenome.indexOf('=') >= 0 || campo_sobrenome.indexOf('+') >= 0 || campo_sobrenome.indexOf('§') >= 0 || 
    campo_sobrenome.indexOf('{') >= 0 || campo_sobrenome.indexOf('[') >= 0 || campo_sobrenome.indexOf('ª') >= 0 || 
    campo_sobrenome.indexOf('}') >= 0 || campo_sobrenome.indexOf(']') >= 0 || campo_sobrenome.indexOf('º') >= 0 || 
    campo_sobrenome.indexOf(';') >= 0 || campo_sobrenome.indexOf(':') >= 0 || campo_sobrenome.indexOf('.') >= 0 || 
    campo_sobrenome.indexOf(',') >= 0 || campo_sobrenome.indexOf('<') >= 0 || campo_sobrenome.indexOf('>') >= 0 || 
    campo_sobrenome.indexOf('?') >= 0 || campo_sobrenome.indexOf('/') >= 0 || campo_sobrenome.indexOf('°') >= 0 || 
    campo_sobrenome.indexOf('|') >= 0 || campo_sobrenome.indexOf('"') >= 0 || campo_sobrenome.indexOf(' \ ') >= 0) {
        div_inp2.innerHTML='Nome inválido, não é permito caracteres como "@ ,# ,% ,! e etc."'
        return 0;
    }
    else {
        return 1;
    }
}

function campo3() {
    var email = inp3.value;

    div_inp3.innerHTML = ''

    if (email.indexOf('@') == -1 || email.indexOf('.com') == -1) {
        div_inp3.innerHTML = 'Email invalido!'
        return 0;
    }
    else {
        return 1;
    }
}

function campo4() {
    var senha = inp4.value;

    div_inp4.innerHTML = ''

    if (senha.length < 8){
        div_inp4.innerHTML = 'senha invalida!'
        return 0;
    }
    else {
        return 1;
    }
}

function campo5() {
    var cpf = inp5.value;

    div_inp5.innerHTML = ''

    if (cpf.length < 14){
        div_inp5.innerHTML = 'CPF invalido!'
        return 0;
    }
    else {
        return 1;
    }
}

function campo6() {
    div_inp6.innerHTML = 'Digite o DDD antes do numero'
    return 1;
}

function campo7() {
    div_inp7.innerHTML = 'Digite o DDD antes do numero'
    return 1;
}

function campo8() {
    div_inp8.innerHTML = 'Copie e cole a URL aqui'
    return 1;
}

function campo9() {
    div_inp9.innerHTML = 'Coloque o identificador da sua empresa aqui'
    return 1;
}

function aprovar() {
    if (campo1() && campo2() && campo3() && campo4() && campo5
    && campo6() && campo7() && campo8() && campo9()){
        alert('Cadastro concluído!')
    }
    else {
        alert('Erro no formulário')
    }
}