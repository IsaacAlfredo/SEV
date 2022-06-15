class ConsoleUser {
  #inputValue;
  constructor() {}

  get inputValue() {
    return this.#inputValue;
  }
  set inputValue(newInput) {
    this.#inputValue = newInput;
  }
  print(entry) {
    if (entry === String) {
      process.stdout.write(entry.trim() + "\n");
    } else {
      process.stdout.write(entry + "\n");
    }
  }
  input(string) {
    if (string != undefined) {
      this.print(string);
    }
    process.stdin.on("data", (data) => {
      this.inputValue = data;
      process.exit();
    });
  }
}

export { ConsoleUser };
