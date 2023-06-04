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
      var mensagemErro = (<HTMLInputElement>document.getElementById('erro'));
      mensagemErro.innerHTML = "";
      try {

        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCEP.json(); // pega o json da api e converte nos dados de endereco do cep
        if (consultaCepConvertida.erro) {
          throw Error ('CEP inexistente!')
        }
        var localidade = (<HTMLInputElement>document.getElementById('cidade'));
        var logradouro = (<HTMLInputElement>document.getElementById('endereco'));
        var bairro = (<HTMLInputElement>document.getElementById('bairro'));
        var uf = (<HTMLInputElement>document.getElementById('estado'));

        localidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        uf.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro;

        console.log(consultaCepConvertida); // imprimi object com bairrro; cep; complemento... /...
        return consultaCepConvertida;

      } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido.</p>`
        console.log(erro)
      }
    }

    var cep = (<HTMLInputElement>document.getElementById('cep'));
    cep.addEventListener("focusout", () => buscaEdereco(cep.value))

    }
  }

                // EVITANDO PROBLEMAS

                    // BONUS: feita tratativa de erro acrescentando uma div com id erro no hmtml e codigo ts para pegar o elemento erro por id e no catch apresentamos mensagem customizda de erro.
