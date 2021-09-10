let numerosString = process.argv.slice(2);

let soma = numerosString.reduce(function (valoraAnterior, item) {
    let numero = parseInt(item);
    if (numero % 2 == 0) {
        return valoraAnterior + parseInt(item);
    } else {
        return valoraAnterior;
    }
}, 0);
console.log(soma);
