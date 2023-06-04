import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  constructor() {};

  ngOnInit(): void {
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

//promise.all

      //let ceps = ['09195350', '010010001'];
      //let conjuntoCeps = ceps.map(valores => buscaEdereco(valores));
      //console.log(conjuntoCeps)
      //Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

//consulta dinamica aula Alura - nao estava conseguindo getElementById

      //var cep = document.getElementById('cep');
      //cep.addEventListener("focusout", () => buscaEdereco(cep.value))

//consulta dinamica solucionada neste meu estudo

    var cep = (<HTMLInputElement>document.getElementById('cep'));
    cep.addEventListener("focusout", () => buscaEdereco(cep.value))

    }
  }

                // CONSULTA DINAMICA

                    //Para a consulta dinamica, consulta o CEP apos digitar e clicar fora do campo CEP, foi construido o codigo comentado na linnha 39/40, criou-se uma variavel cep que recebia o id cep do documento html e pegavamos esse elemendo adicionando um escutador de eventos e ao escutar que clicavamos fora do campo CEP era feita a funcao assincrona buscaEndereco que recebia o valor de cep.

                    //Porem o "problema" é que o typeScript é typesafe, entao o document.getElementByID() retorna o tipo HTMLElement que nao contem a propriedade de value. O subtipo HTMLInputElement tambem nao contem o valor da propriedade.

                    //A solucao para isso é lancar o resultado do getElementByID para o HTMLInputElement criando a variavel cep que recebe o <HTMLInputElement>document.getElementById('cep') e ai sim incrementamos um escutador de eventos no campo cep com o focusout para executar a funcao assincrona busca endereco com o valor de cep.
