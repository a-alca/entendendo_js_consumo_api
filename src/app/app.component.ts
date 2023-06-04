import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}

async function buscaEdereco(cep) { //criando funcao assincrona
  try {

    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCEP.json(); // pega o json da api e converte nos dados de endereco do cep
    if (consultaCepConvertida.erro) {
      throw Error ('CEP inexistente!')
    }
    console.log(consultaCepConvertida); // imprimi object com bairrro; cep; complemento... /...
    return consultaCepConvertida;

  } catch (erro) {
    console.log(erro)
  }
}

let ceps = ['09195350', '010010001'];
let conjuntoCeps = ceps.map(valores => buscaEdereco(valores));
console.log(conjuntoCeps)
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))


                // PROMISE ALL

                    // Nao é o caso de resolucao dessa atividade, mas para entender o PROMISE.ALL, foi apresentado o desafio caso seja necessário buscar mais de um cep na mesma chamada: E para isso, a funcao assincrona buscaEnderco precisa receber um valor de parametro, vou inserir o valor de parametro "cep" >> no fetch api, troquei as aspas simples por crase >> Onde tinha o valor do CEP, inserir um ${cep} (dentro delas é colocado o valor esperado receber no parametro cep).

                    // Apos esses passos, inserir um retorno abaixo do retorno console.log(consultaConvertida) que ele vai chamar para quem tiver chamando essa funcao, esse valor.

                    // depois, no fianl, antes da chamada da funcao assincrona BuscaEndereco(), inseri um LET ceps e um ARRAY de ceps para consulta, e apos isso, fazer um array de conjunto de ceps e para isso, informo o parametro ceps.map e dentro do map é feita uma arrow function com a funcao valores pegar a funcao buscaEndereco() recebendo o valores que estamos pegando = buscaEndereco(valores): Com isso ele faz um novo array com o que retornar daquela funcao buscaEndereco para cada um dos valores de dentro do CEP e esses valores serao PROMISES e para resolver mais de uma promessa, é utilizado o PROMISE.ALL.

                    // entao tratando com promise.all, nessa chamada vemos no console os dois objetos tratado com os dados de enderco dos respectivos ceps informados

                    //O async/await apesar de ser uma opção mais "legível" ao .then() é importante frisar que não são logicamente equivalentes: o async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido. O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez. O artigo “Async/await no JavaScript: o que é e quando usar a programação assíncrona?” pode te ajudar a entender ambos os casos e suas diferenças
