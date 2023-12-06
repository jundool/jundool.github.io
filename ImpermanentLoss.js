/*
Author: JUNSUNG LEE(Internet ID: CodeMaster42)
Contact: [Your Email or Contact Info]
File: impermanent_loss_calculator.js
Created: [Creation Date]
Description: This JavaScript code calculates impermanent loss in liquidity pools. ChatGPT 3.5 provided guidance and assistance during the development process.
*/

function calculate() {
    const coin1Amount = parseFloat(document.getElementById('coin1Amount').value);
    const coin1InitialPrice = parseFloat(document.getElementById('coin1InitialPrice').value);
    const coin1NewPrice = parseFloat(document.getElementById('coin1NewPrice').value);

    const coin2Amount = parseFloat(document.getElementById('coin2Amount').value);
    const coin2InitialPrice = parseFloat(document.getElementById('coin2InitialPrice').value);
    const coin2NewPrice = parseFloat(document.getElementById('coin2NewPrice').value);

    const coin1InitialFunds = coin1Amount * coin1InitialPrice;
    const coin2InitialFunds = coin2Amount * coin2InitialPrice;
    const totalInitialFunds = coin1InitialFunds + coin2InitialFunds;

    const coin1ChangedValue = coin1Amount * coin1NewPrice;
    const coin2ChangedValue = coin2Amount * coin2NewPrice;
    const totalChangedValue = coin1ChangedValue + coin2ChangedValue;

    const changedCoin1DollarValue = (coin1ChangedValue + coin2ChangedValue) / 2;
    const changedCoin2DollarValue = (coin1ChangedValue + coin2ChangedValue) / 2;

    const changedCoin1Amount = changedCoin1DollarValue / coin1NewPrice;
    const changedCoin2Amount = changedCoin2DollarValue / coin2NewPrice;

    const impermanentLoss = totalInitialFunds - totalChangedValue;

    displayResults(
        changedCoin1DollarValue,
        changedCoin2DollarValue,
        changedCoin1Amount,
        changedCoin2Amount,
        impermanentLoss
    );
}

function displayResults(changedCoin1DollarValue, changedCoin2DollarValue, changedCoin1Amount, changedCoin2Amount, impermanentLoss) {
    const changedCoin1DollarValueSpan = document.getElementById('changedCoin1DollarValue');
    const changedCoin2DollarValueSpan = document.getElementById('changedCoin2DollarValue');
    const changedCoin1AmountSpan = document.getElementById('changedCoin1Amount');
    const changedCoin2AmountSpan = document.getElementById('changedCoin2Amount');
    const impermanentLossSpan = document.getElementById('impermanentLoss');

    changedCoin1DollarValueSpan.textContent = `$${changedCoin1DollarValue.toFixed(0)}`;
    changedCoin2DollarValueSpan.textContent = `$${changedCoin2DollarValue.toFixed(0)}`;
    changedCoin1AmountSpan.textContent = changedCoin1Amount.toFixed(0);
    changedCoin2AmountSpan.textContent = changedCoin2Amount.toFixed(0);

    if (impermanentLoss < 0) {
        impermanentLossSpan.textContent = `$${impermanentLoss.toFixed(0)}`;
        impermanentLossSpan.classList.add('negative');
        impermanentLossSpan.classList.remove('positive');
        impermanentLossSpan.classList.remove('loss');
    } else if (impermanentLoss > 0) {
        impermanentLossSpan.textContent = `$${impermanentLoss.toFixed(0)}`;
        impermanentLossSpan.classList.add('positive');
        impermanentLossSpan.classList.remove('negative');
        impermanentLossSpan.classList.remove('loss');
    } else {
        impermanentLossSpan.textContent = `$${impermanentLoss.toFixed(0)}`;
        impermanentLossSpan.classList.remove('positive');
        impermanentLossSpan.classList.remove('negative');
        impermanentLossSpan.classList.add('loss');
    }
}
