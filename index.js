let inp = document.querySelector(".display");
function appendValue(val) {
  inp.value += val;
}
function calculate() {
  let res = eval(inp.value);
  inp.value = res;
}
function clearDisplay() {
  inp.value = "";
}
