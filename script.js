function runCode() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output").contentWindow.document;

  output.open();
  output.write(code);
  output.close();
}
