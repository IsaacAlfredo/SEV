import { Usuario } from "./Usuario";

class Professor extends Usuario {
  constructor(novoNome, novoLogin, novaSenha) {
    super(novoNome, novoLogin, novaSenha);
  }
}

export { Professor };
