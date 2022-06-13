import { Aluno } from "../classes/Aluno.js";
import { Bd } from "../classes/Bd.js";
import { Professor } from "../classes/Professor.js";
import {} from "process";
import { input } from "../funcoes/input.js";

var alunos = new Bd();
var professores = new Bd();

process.stdout.write("Bem vindo!\n");
input();

/*while (true) {
  console.log("Selecione uma opção no menu:");
  let menuOpcao;
  /*switch (menuOpcao) {
    case "1":
      break;
    case "2":
      break;
    case "0":
      break;
    default:
      console.log("Erro: Digite uma opção válida");
      break;
  }
}
*/
