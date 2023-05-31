import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}

var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/')
.then(resposta => resposta.json())
.then( r => {
    if (r.erro) {                           // SE (r.erro for TRUE) {eu quero que ele faca alguma cosia...
      throw Error('Esse CEP não existe!')  // LANCE Error: (Esse CEP não existe!)
    } else                                 // SE NAO
  console.log(r)})                        // console.log mostra r
.catch( erro => console.log(erro));

console.log(consultaCEP)

          // Metodo CATCH - tratando erros (promise reject):

                    // recap atividade ./anterior:
                      // SOBRE O OBJETO RESPONSE, para acessa-lo, é necessario usar os MÉTODOS das PROMISES, que vao retornar outras PROMISES, esses metodos sao: THEN, CATCH e FINALLY.

                // No commit anterior vimos que o metodo THEM pega a resposta sendo do objeto response que nao vem traduzido e faz alguma coisa. Mas o THEN só faz isso se a PROMISE for RESOLVE.

                // quando a PROMISE for REJECT usamos o metodo CATCH.

                // Caso eu faco um teste com a API https://viacep.com.br/ws/0100100/json/ retirando UM 0 do final do CEP:

                // Expected output:
                                  // TypeError: load failed

                // esse erro ocorre pq digitei um CEP no formato inválido, e seguindo os requisitos do ViaCep, quando o formato do CEP for inválido, o response será erro 400 (Bad Request)

                // Reforcando, cada PROMISE retorna o OBJETO RESPONSE que por sua vez retorna pode ser um state RESOLVE (THEN - se resolvido ENTAO faca isso com o fetch) ou REJECT (CATCH - se rejeitado, PEGA o erro e imprima).

                // Como exemplo anterior no commit fatch api e promises, na compra via internet, caso o produto nao chegue no destino final desejado, ele tera o estado de REJECT, mas para eu receber uma mensagem preciso que seja PEGO o motivo do reject e me seja passado um informacao detalhada do erro, e para isso é necessário uma CONDICIONAL.

                // Se com o metodo CATCH a condicional lancando um erro tratado eu fizer um teste com a API https://viacep.com.br/ws/01001250/json/' = CEP invalido, entao o CATCH PEGA o erro que por lógica baterá na condicional erro que por sua vez lancara o erro tratado por mim no console.


