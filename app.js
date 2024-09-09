function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let subAteDe = ate - de;
    if(de >= ate){
        alert('O campo "Do número" deve ser menor que à do "Até o número".');
        return;
    }
    
    let sorteados = [];
    let numero;

    if(quantidade >= ate){
        alert('Você digitou a quantidade maior ou igual que o limite de sorteados, escreva um número menor');
        return;
    }
    
    if (subAteDe < quantidade){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!.');
        return;
    }

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAletorio(de,ate);

        while(sorteados.includes(numero)){ //O .includes verifica se o numer já está no sorteados com True or False
            numero = obterNumeroAletorio(de,ate);
        }

        sorteados.push(numero);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
        alterarStatusBotao();

    }
}

function obterNumeroAletorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


// Nessa aula, você aprendeu como:

//     Analisar o código de uma página HTML para entender sua estrutura e planejar o código de sua funcionalidade;

//     Declarar variáveis no JavaScript para armazenar elementos recuperados da página;

//     Recuperar elementos da página com JavaScript, com o uso da função document.getElementById();

//     Recuperar valores digitados em campos de um formulário na página, via propriedade value;

//     Utilizar o recurso de Template String, do JavaScript, para concatenar valores de variáveis em String.

//     Utilizar a função parseInt, no JavaScript, para converter um valor do tipo String para um número inteiro;

//     Fazer uma estrutura de repetição utilizando for para gerar números aleatórios no sorteador;

//     Declarar uma variável do tipo array para representar uma lista;

//     Adicionar um elemento a um array com a função push;

//     Utilizar um código já desenvolvido por terceiros para realizar o sorteio de um número aleatório dentro de um intervalo.

//     Declarar um bloco condicional if/else para implementar a funcionalidade de alterar o status do botão Reiniciar.

//     Acessar a lista de classes que um elemento da página possui, via propriedade classList;

//     Verificar se um elemento da página possui uma determinada classe CSS, via função classList.contains();

//     Remover uma classe CSS de um elemento da página, via função classList.remove();

//     Adicionar uma classe CSS a um elemento da página, via função classList.add();

//     Modificar o código HTML de um elemento na página, via propriedade innerHTML.

