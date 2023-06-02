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
    .then( r => {
        if (r.erro) {                           // SE (r.erro for TRUE) {eu quero que ele faca alguma cosia...
          throw Error('Esse CEP não existe!')  // LANCE Error: (Esse CEP não existe!)
        } else                                 // SE NAO
            console.log(r)
    })                                        // console.log mostra r
    .catch( erro => console.log(erro))
    .finally( mensagem => console.log('mensagem'));

console.log(consultaCEP)

          // Metodo FINALY - tratando erros (promise reject):

                    // recap atividade ./anterior:
                      // SOBRE O OBJETO RESPONSE, para acessa-lo, é necessario usar os MÉTODOS das PROMISES, que vao retornar outras PROMISES, esses metodos sao: THEN, CATCH e FINALLY.



