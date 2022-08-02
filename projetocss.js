const { url } = require('inspector')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let entradaDeDados = [];
let saidaDeDados = 'sair';

rl.question('O que deseja inserir? \n', (userInput) => {
  if (userInput.trim() == saidaDeDados) {
    rl.close()
    console.log('Você saiu!')
  } else {
    rl.setPrompt('Quais dados deseja inserir? \n')
    entradaDeDados.push(userInput.trim());
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == saidaDeDados) {
        rl.close();
        entradaDeDados.sort();
        for (let i = 0; i < entradaDeDados.length; i++) {
          console.log(entradaDeDados[i])
        }
        console.log('Você saiu!' + entradaDeDados.sort())
      } else {
        rl.setPrompt("Digite seu proximo item, ou sair! \n");
        rl.prompt();
        entradaDeDados.push(userInput.trim());
      }
    })
  }
});
