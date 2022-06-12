/*Para abstrair a complexidade de um banco de dados real, essa classe será usada como um */

class Bd {
  #lista = [];

  constructor() {}

  get lista() {
    return this.#lista;
  }
  set lista(novaLista) {
    this.#lista = novaLista;
  }

  adicionarItem(item) {
    this.lista.push(item);
  }
}

export { Bd };
