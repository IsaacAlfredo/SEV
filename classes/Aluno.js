import { Usuario } from "./Usuario.js";

class Aluno extends Usuario {
  constructor(novoNome, novoLogin, novaSenha) {
    super(novoNome, novoLogin, novaSenha);
  }
}

export { Aluno };
