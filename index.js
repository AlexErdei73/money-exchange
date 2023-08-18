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

function getPriceInUSD(currencies, pricesInUSD, currency) {
	var currencyIndex = currencies.indexOf(currency);
	var priceInUSD = pricesInUSD[currencyIndex];
	return priceInUSD;
}
	
function calculateOutputValue(inputCurrency, outputCurrency, inputValue) {
	var inputCurrencyPriceInUSD = getPriceInUSD(
		currencies,
		pricesInUSD,
		inputCurrency
	);
	var outputCurrencyPriceInUSD = getPriceInUSD(
		currencies,
		pricesInUSD,
		outputCurrency
	);
	var outputValue =
		(inputValue * inputCurrencyPriceInUSD) / outputCurrencyPriceInUSD;
	return outputValue;
}

var formElement = document.querySelector("form");
formElement.addEventListener("submit", function (event) {
	event.preventDefault();

	var userInputCurrency = inputCurrencySelectElement.value;
	var userOutputCurrency = outputCurrencySelectElement.value;
	var userInputValue = formElement.querySelector("input").value;

	var h1Element = document.getElementById("output-text");
	var outputValue = calculateOutputValue(userInputCurrency, userOutputCurrency, userInputValue);
	h1Element.textContent = `${userInputValue}${userInputCurrency} = ${outputValue}${userOutputCurrency}`;		
});
