function input(string) {
  if (string != undefined) {
    process.stdout.write(string.trim() + "\n");
  }
  process.stdin.on("data", (data) => {
    process.exit();
  });
}

export { input };
