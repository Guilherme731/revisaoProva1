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