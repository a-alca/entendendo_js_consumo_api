import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}

var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/');

console.log(consultaCEP)

// FETCH API:

            //Expected output:
                              //Promise
                                // result: Response { type: "basic", url: "viacep.com.br/ws/01001000/json/", redirect:......}
                                // status: "resolved"

            // API - Interface de Programacao de aplicacao e ela permite que doisa componentes de software se comuniquem. Chamamos esses dois lados de cliente e servidor.

            // FETCH - é utilizado para acessar uma api, ex acima, o fetch acessa a API ViaCEP, assim, o metodo fetch é assincrono e sempre retorna uma PROMISE.

            // PROMISE - É uma promessa de que alvo vai acontecer. Como retorno, ela pode ser resolvida ou rejeitada. Isso permite que métodos assincronos se tornem síncronos. Ou seja, ao invés de retornar um valor especifico, o valor final, como ainda nao chegou la, ele retorna uma promessa que esse valor uma hora vai chegar. Digamos que ao efetuar uma compra pela internet, geramos uma promise de que esse pedido será entregue ou ocorrer algum problema que nao chegue ao seu destino final esperado = PROMISE -> RESOLVIDA (RESOLVE) ou -> REJEITADA (REJECT)

            // ex

            //const entrega = new Promise ( function
            //(resolve, reject) {
            //  if (recebeu == true) {
            //    resolve('Ana recebeu a encomenda!')
            //  } else {
            //    reject ( 'Não foi possível receber aencomenda!')
            //  }
            //  })

            // Uma curiosidade dentro dessa antamia da promise: Percebe-se que no codigo comentado acima, estamos enviando uma funcao como parametro para ela e aparecem Callbacks. E é isso que o RESOLVE e REJECT sao, dois CALLBACKs da funcao da promise.

            // SOBRE O OBJETO RESPONSE, para acessa-lo, é necessario usar os MÉTODOS das PROMISES, que vao retornar outras PROMISES, esses metodos sao: THEN, CATCH e FINALLY.


