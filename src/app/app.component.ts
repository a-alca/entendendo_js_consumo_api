import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}

async function buscaEdereco() { //criando funcao assincrona

  var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
  var consultaCepConvertida = await consultaCEP.json(); // pega o json da api e converte nos dados de endereco do cep

  console.log(consultaCepConvertida) // imprimi object com bairrro; cep; complemento... /...

}

buscaEdereco(); // puxa a funcao e coloca la na callstack

                // Nao existe so uma maneira de escrever um codigo assincrono, para evitar o chamado callbackhell (onde haveria vários THEN, como na consulta cep onde eu dou um FETCH na API, THEN resposta.json. THEN trata erro, THEN cada item do objeto) podemos criar uma AWAIT FUNCTION, onde consumimos uma API e tratamos suas RESPONSES.
