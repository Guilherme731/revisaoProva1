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