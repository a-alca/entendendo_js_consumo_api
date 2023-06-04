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
  try {

    var consultaCEP = await fetch('https://viacep.com.br/ws/01001250/json/');
    var consultaCepConvertida = await consultaCEP.json(); // pega o json da api e converte nos dados de endereco do cep
    if (consultaCepConvertida.erro) {
      throw Error ('CEP inexistente!') // quando informamos um `cep` com 8 digitos numericos mas inexistente o viacep retorna erro = True e por isso pfoi preciso tratar nessa linha. Quando for digitado em formato inválido, o viacep retorna erro 400, e para isso, encaminharei para backlog de melhoria uma solucao para tratar que no input 'cep' o usuario so consiga digitar numeros e que o botao "consultar CEP" s[o fique ativo apos digitar 8 numeros.
    }
    console.log(consultaCepConvertida) // imprimi object com bairrro; cep; complemento... /...

  } catch (erro) {
    console.log(erro)
  }


}

buscaEdereco(); // puxa a funcao e coloca la na callstack

                // try >> catch - throw ERROR
