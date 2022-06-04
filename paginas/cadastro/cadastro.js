import Bd from "../../Bd.js";

var alunos = new Bd();
var professores = new Bd();

function cadastrar() {

    let nome = document.querySelector("input#nome").value
    window.alert(nome)

}

export { alunos, professores };
