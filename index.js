var currencies = ["USD", "GBP", "EUR", "HUF", "DA"];
var pricesInUSD = [1, 1.29, 1.12, 0.0030, 0.0074];

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


