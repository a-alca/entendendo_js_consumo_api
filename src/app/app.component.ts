import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}

var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then( r => console.log(r));

console.log(consultaCEP)

          //THEN e JSON:

                    // recap atividade anterior:
                      // SOBRE O OBJETO RESPONSE, para acessa-lo, é necessario usar os MÉTODOS das PROMISES, que vao retornar outras PROMISES, esses metodos sao: THEN, CATCH e FINALLY.
                    // Quando eu pego (fetch) a API viaCep, a resposta que eu vou receber é um objeto do tipo RESPONSE (seja ele REJECT ou RESOLVE) e para acessar esse objeto eu poço utilizar o método THEN: var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/').then();

                    // Leio o código como:

                        // consultaCEP pega (fetch) a URL (API). Entao (then) faça o fetch. - E entao, com aquela resposta, ele vai fazer alguma operacao que vou colocar dentro do then(). E a resposta, sendo do objeto do RESPONSE, nao vem da maneira que podemos acessar (a requisicao chega em formato de bytes) sem ser convertido por isso .then(resposta => resposta.json()) para converter esse response em json que "é semelhante ao objeto JS" e dessa forma será possível acessar o response e exibir em tela utilizando novamente o método THEN que complementa minha leitura da linha de código assim:

                        // consultaCEP pega (fetch) a URL (API). Entao (then) faça o fetch que é a funcao resposta => converter a resposta em json() ENTAO r (resposta) console.log imprimi r no console.

                        // expected output:

                            //promise {<pending>}
                            // object: (com os dados de endereco do cep consultado que veio montado na URL da API 'https://viacep.com.br/ws/01001000/json/')

