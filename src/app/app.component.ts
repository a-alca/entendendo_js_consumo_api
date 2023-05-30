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

sendMsg();

console.log("Bran diz: tks xP")

    // expected output: "Messages"
                        //"Bran say: Hi, how are you"
                        //"Bran say: I`ll send you a invitation!"
                        //"Joojen answer: got it!"
                        //"Bran diz: tks xP")

                        // Essa é um exmplo da FORMA SINCRONA onde: O EVENT LOOP é como um seguranca na festa e vai guiando para qual porta a pessoa tem que entrar, qual o acesso dela e quando ela deve acontecer. Assim, ele fica o tempo inteiro no codigo olhando o que vai ser chamado para a CALL STACK. Já na Call Stack vao todas as coisas que devem acontecer na tela. Entao ele chama uma coisa por vez no código, essa é a funcao dele. O EVENT LOOP manda para lá o nosso c[odigo, as partes "VIPs" que tem que acontecer primeiro. elas entram primeiro ali na fila. Por padrão, tudo vem vazio. Mas tambem temos a TASK QUEUE, que vai dar conta do nosso sistema síncrono (é a outra fila que o guarda vai fazer a segurança).
