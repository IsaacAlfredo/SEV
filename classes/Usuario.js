class Usuario {
  #nome;
  #matricula;
  #login;
  #senha;
  #disciplinas = [];

  constructor(novoNome, novoLogin, novaSenha) {
    this.nome = novoNome;
    this.login = novoLogin;
    this.senha = novaSenha;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  get matricula() {
    return this.#matricula;
  }

  set matricula(novaMatricula) {
    this.#matricula = novaMatricula;
  }

  get login() {
    return this.#login;
  }

  set login(novoLogin) {
    this.#login = novoLogin;
  }

  get senha() {
    return this.#senha;
  }

  set senha(novaSenha) {
    this.#senha = novaSenha;
  }

  get disciplinas() {
    return this.#disciplinas;
  }

  set disciplinas(novaDisciplina) {
    this.#disciplinas.push(novaDisciplina);
  }
}

export { Usuario };
