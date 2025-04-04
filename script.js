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