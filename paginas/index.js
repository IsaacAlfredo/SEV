import { Aluno } from "../classes/Aluno.js";
import { Bd } from "../classes/Bd.js";
import { Professor } from "../classes/Professor.js";
import { input } from "../funcoes/input.js";
import { print } from "../funcoes/print.js";
import { ConsoleMenu } from "../classes/ConsoleMenu.js";

var alunos = new Bd();
var professores = new Bd();

process.stdout.write("Bem vindo!\n");
function event1() {
  console.log("funciona!");
}
var cm = new ConsoleMenu("titulo", ["sair", "opção 1"], [event1], true);
cm.execute();
