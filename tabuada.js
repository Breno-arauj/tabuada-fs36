const tabuadaResultado = document.getElementById("tabuada");

function gerarTabuada() {

    const numero = parseInt(document.getElementById("numero").value);
    const de = parseInt(document.getElementById("de").value);
    const ate = parseInt(document.getElementById("ate").value);

    console.log(numero, de, ate);

    Array.from({ length: ate }, function (v, k) {
        const multiplicador = k + 1
        const linhaTabuada = numero + ' x ' + multiplicador + ' = ' + (numero * multiplicador) + '  \n';
        console.log(linhaTabuada);

        tabuada = tabuada + linhaTabuada;
    })

    console.log(tabuada);
    tabuadaResultado.innerText = tabuada;
};

