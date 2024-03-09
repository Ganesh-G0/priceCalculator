const pricePerKg = document.getElementById("pricePerKg");
const pricePerG = document.getElementById("pricePerG");
const pay = document.getElementById("pay");
const calculate = document.getElementById("calculate");

function updatePrice() {
  let priceOfGm = (pricePerG.value / 1000) * pricePerKg.value;
  pay.innerText = "$ " + priceOfGm;
};