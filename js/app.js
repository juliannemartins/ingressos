function comprar(){

    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    

    if(ingresso == 'inferior'){

        comprarInferior(quantidade);

    } else if(ingresso == 'superior'){

        comprarSuperior(quantidade);


    } else if(ingresso == 'pista'){

        comprarPista(quantidade);

    }


}

function comprarInferior(quantidade){

    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade > qtdInferior){
        alert('Quantidade indisponível para tipo Cadeira inferior!');

    }else{

        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');

    }
}

function comprarSuperior(quantidade){

    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > qtdSuperior){
        alert('Quantidade indisponível para tipo Cadeira Superior!');

    }else{

        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');

    }
}

function comprarPista(quantidade){

    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade > qtdPista){
        alert('Quantidade indisponível para tipo Pista!');

    }else{

        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');

    }
}