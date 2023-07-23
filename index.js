var currencies = ["USD", "GBP", "EUR", "HUF", "DA"];
var pricesInUSD = [1, 1.29, 1.12, 0.003, 0.0074];

var inputCurrencySelectElement = document.querySelector("#input-currency");
var outputCurrencySelectElement = document.querySelector("#output-currency");

function generateOptions(currencies, selectElement) {
  for (var i = 0; i < currencies.length; i++) {
    var nextOptionElement = document.createElement("option");
    nextOptionElement.value = currencies[i];
    nextOptionElement.textContent = currencies[i];
    if (i === 0) nextOptionElement.selected = true;
    selectElement.appendChild(nextOptionElement);
  }
}

generateOptions(currencies, inputCurrencySelectElement);
generateOptions(currencies, outputCurrencySelectElement);

var formElement = document.querySelector("form");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("hello world");
});


function calculateOutputValue(inputCurrency, outputCurrency, inputValue){
  var inputCurrencyIndex = currencies.indexOf(inputCurrency);
  var outputCurrencyIndex = currencies.indexOf(outputCurrency);
  var currencyAmount = document.getElementById('currency-amount').value;


  var rateInUSD = pricesInUSD[inputCurrencyIndex];
  var rateInOutputCurrency = pricesInUSD[outputCurrencyIndex];
  var outputValue = (currencyAmount * rateInUSD) / rateInOutputCurrency;
  return outputValue; 
}

















