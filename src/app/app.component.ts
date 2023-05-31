import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}

console.log("Messages");
const sendMsg = () => {
    console.log("Bran say: Hi, how are you");
    console.log("Bran say: I`ll send you a invitation!");
    console.log("Joojen answer: got it!")
}

setTimeout(sendMsg, 5000);
console.log("Bran diz: tks xP")

// CALLBACK:
            //Callbacks são, basicamente, funções envidas como parâmetro para outras funçoes.
            // Como no codigo acima, a funcao assincrona setTimeout recebe a funcao sendMsg e o callback transofmra essa execucao da funcao sendMsg em cinco segundos apos o inicio do codigo.
            // Entao, aconteceu uma tarefa em segundo plano, que nao interrompeu o andamento das funcoes posteriores dos outros console.log. E isso facilita e agiliza muito o nosso trabalho, por exemplo, com as requisicoes.
            // Geralmente, callbacks sao executados quando alguma operacao é conluida ou quando um evento espec[ifico ocorre. Callbacks sao assincronos, portanto sao funcoes que sao ativadas por algum fator predeterminado, podendo ser um tempo especifico, a partir de uma acao do usuario, depois da conclusao de alguma coisa.
