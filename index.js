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

function calculateOutputValue(inputCurrency, outputCurrency, inputValue) {
	//The next two lines does something
	var inputCurrencyIndex = currencies.indexOf(inputCurrency);
	var inputCurrencyPriceInUSD = pricesInUSD[inputCurrencyIndex];

	//These two lines does almost the same as the previous two
	//You can make one function to replace these lines to make
	//code DRY = Do Not Repeat Yourself
	var outputCurrencyIndex = currencies.indexOf(outputCurrency);
	var outputCurrencyPriceInUSD = pricesInUSD[outputCurrencyIndex];

	//var currencyAmount = document.getElementById('currency-amount').value;
	//Above line is bad, because the code should use inputValue parameter
	//to avoid DOM manipulation code in this function. Here we ONLY
	//calculate

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

	//document.getElementById("text").innerHTML = (calculateOutputValue(userInputCurrency, userOutputCurrency, userInputValue));
	//innerHTML is working, but better to use textContent
	var h1Element = document.getElementById("output-text");
	h1Element.textContent = calculateOutputValue(
		userInputCurrency,
		userOutputCurrency,
		userInputValue
	);
});
