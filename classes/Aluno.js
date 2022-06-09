import { Usuario } from "./Usuario";

class Aluno extends Usuario {
  constructor(novoNome, novoLogin, novaSenha) {
    super(novoNome, novoLogin, novaSenha);
  }
}

export { Aluno };
