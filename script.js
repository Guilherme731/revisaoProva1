function ex1(){
    let qtdNumeros = parseInt(prompt('Quantos números você deseja somar?'));
    let soma = 0;
    for(let i = 0; i < qtdNumeros; i++){
        let numero = parseFloat(prompt('Digite o ' + (i + 1) + 'º numero'));
        soma = soma + numero;
    }

    console.log('A soma dos números é igual a ' + soma)
}

function ex2(){
    let numero = 10;
    let intervalContagem;

    intervalContagem = setInterval(contagemRegressiva, 1000);

    function contagemRegressiva(){
        console.log(numero);
        numero--;
        if(numero < 0){
            console.log('Lançamento!');
            clearInterval(intervalContagem);
        }
    }
}

function ex3(){
    let ganhoBruto = 0;
    let gastosTotal = 0;

    for(let i = 0; i < 12; i++){
        let receita = parseFloat(prompt('Digite a receita bruta do mês ' + (i + 1)));
        let despesa = parseFloat(prompt('Digite o total de despesas do mês ' + (i + 1)));

        ganhoBruto += receita;
        gastosTotal += despesa;
    }

    let saldo = ganhoBruto - gastosTotal;

    console.log('Total de ganhos: ' + ganhoBruto);
    console.log('Total de gastos: ' + gastosTotal);
    console.log('Saldo final: ' + saldo);
    if(saldo > 0){
        console.log('A empresa teve lucro no ano!');
    }else if(saldo < 0){
        console.log('A empresa teve prejuízo no ano!');
    }else{
        console.log('A empresa não teve lucro nem prejuízo no ano!');
    }
}

function ex4(){
    let numeros = [];
    for(let i = 0; i < 4; i++){
        numeros[i] = parseFloat(prompt('Digite um número'));
    }
    numeros.sort();
    for(let i = 3; i >= 0; i--){
        console.log(numeros[i]);
    }
}

function ex5(){
    let numero = parseInt(prompt('Digite um número'));
    if(numero % 2 == 0){
        console.log('O número ' + numero +' é par');
        numero++;
        console.log('Agora o número é ' + numero + ', que é ímpar');
    }else{
        console.log('O número ' + numero +' é ímpar');
        numero++;
        console.log('Agora o número é ' + numero + ', que é par');
    }
}

function ex6(){
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let letra = prompt('Digite uma letra').toLowerCase();
    let possuiVogal = false;

    switch(letra){
        case vogais[0]:
            possuiVogal = true;
            break;
        case vogais[1]:
            possuiVogal = true;
            break;
        case vogais[2]:
            possuiVogal = true;
            break;
        case vogais[3]:
            possuiVogal = true;
            break;
        case vogais[4]:
            possuiVogal = true;
            break;
    }

    if(possuiVogal){
        console.log('É uma vogal');
    }else{
        console.log('É uma consoante');
    }
}

function ex7(){
    let saboresPrecos = [['Chocolate', 1.5], ['Morango', 2.5], ['Creme', 2.5],['Manga', 3.2],['Melancia', 3.4],['Vanilla Ice', 3],['Céu Azul', 3.6],['Brownie', 4],['Hawaiano', 5]];

    console.log('Lista de sabores');
    for(let i = 0; i < saboresPrecos.length; i++){
        console.log((i + 1) + ': ' +saboresPrecos[i][0]);
    }

    let sabor = parseInt(prompt('Digite o número do sabor desejado (veja a lista no console)')) - 1;

    console.log('O preço do sabor ' + saboresPrecos[sabor][0] + ' é R$' + saboresPrecos[sabor][1]);
}

function ex8(){
    let numeroObjetivo = Math.random();
    numeroObjetivo = Math.floor(numeroObjetivo * (100 - 1) + 1);

    let palpite = parseInt(prompt('Faça uma tentativa'));

    while(palpite != numeroObjetivo){

        if(palpite > numeroObjetivo){
            console.log('O número certo é MENOR');
        }else{
            console.log('O número certo é MAIOR');
        }

        palpite = parseInt(prompt('Faça uma tentativa'));
    }
    console.log('Parabéns! o número é ', numeroObjetivo);
}

function ex9(){
    let frase = prompt('Digite uma frase');
    let qtdVogais = 0;
    
    for(let i = 0; i < frase.length; i++){
        if(eVogal(frase[i])){
            qtdVogais++;
        }
    }

    console.log('A quantidade de vogais é ' + qtdVogais);

    function eVogal(letra) {
        let vogais = ['a', 'e', 'i', 'o', 'u'];
        let possuiVogal = false;

        switch (letra) {
            case vogais[0]:
                possuiVogal = true;
                break;
            case vogais[1]:
                possuiVogal = true;
                break;
            case vogais[2]:
                possuiVogal = true;
                break;
            case vogais[3]:
                possuiVogal = true;
                break;
            case vogais[4]:
                possuiVogal = true;
                break;
        }

        return possuiVogal;
    }
}

function ex10(){
    validarSenha(prompt('Digite uma senha!'))

    function validarSenha(senha){

        if(senha.length >= 8 && temRequisitos(senha)){
            console.log('A senha É válida');
        }else{
            console.log('A senha NÃO é válida');
        }
    }

    function temRequisitos(texto){
        let temMaiuscula = false;
        let temMinuscula = false;
        let temNumero = false;

        for (let i = 0; i < texto.length; i++) {
            caractere = texto[i];
            if (caractere == parseInt(caractere)) {
                temNumero = true;
            } else {
                if (caractere === caractere.toUpperCase()) {
                    temMaiuscula = true;
                }
                if (caractere === caractere.toLowerCase()) {
                    temMinuscula = true;
                }
            }
        };
        if(temMaiuscula && temMinuscula && temNumero){
            return true;
        }else{
            return false;
        }
    }
}