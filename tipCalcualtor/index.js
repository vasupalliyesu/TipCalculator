function Calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercentage").value);
  const tipAmountInput = document.getElementById("tipAmount");
  const totalInput = document.getElementById("total");


  const tip = amount * tipPercent / 100;
  const total = amount + tip;

  tipAmountInput.value = tip.toFixed(2);
  totalInput.value = total.toFixed(2);
}
