var professores = new Bd();
var alunos = new Bd();

function cadastrar() {
  let nome = document.querySelector("input#nome").value;
  let login = document.querySelector("input#login").value;
  let senha = document.querySelector("input#senha").value;
  let usuario = document.querySelector("select#tipo").value;

  if (usuario == "aluno") {
    var aluno = new Aluno(nome, login, senha);
    alunos.lista.push(aluno);
    alert(alunos.lista);
  } else {
    var professor = new Professor(nome, login, senha);
    professores.lista.push(professor);
    alert(professores.lista);
  }
}
