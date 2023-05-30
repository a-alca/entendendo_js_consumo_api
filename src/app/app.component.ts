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

    // expected output:
                        //"Messages"
                        //"Bran diz: tks xP") << TASk QUEUE
                        //"Bran say: Hi, how are you"
                        //"Bran say: I`ll send you a invitation!"
                        //"Joojen answer: got it!"

                        // A funcao setTimeout é responsavel por fazer que uma funcao agurade um determinado momento a ser executada enquanto outras funcoes estao sendo executadas, ela fica em segundo plano. O exemplo de lavar a louça é perfeito, pois por norma mundial, primeiro são lavados os copos >> colocamos agua com detergente dentro das panelas e potes e deixamos ESPERANDO la em cima do fogão >> enquanto isso, eu nao para de lavar a louça, volto para lavar os talheres, pratos, e por fim, executo o lavar as panelas e potes.

                        // entao, diferente do modo SINCRONO onde a leitura funcionou através do EVENT LOOP e do CALL STACK, o modo ASINCRONO, quando Event Loop recebe no Call Stack uma funcao setTimeout, ele guarda na TASK QUEUE,  agurada lá por debaixo dos panos, executa o que sincrono e por fim executa a funcao que esta na task queue.

