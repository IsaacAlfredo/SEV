function input(string, dataFunction) {
  if (string != undefined) {
    process.stdout.write(string.trim() + "\n");
  }
  process.stdin.on("data", (data) => {
    if (dataFunction != undefined) {
      dataFunction();
    }
    process.exit();
  });
}

export { input };
