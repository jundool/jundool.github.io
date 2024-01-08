 /*
  Author: [LEE JUNSUNG]
  File name: [Liquidity_Pool_Supply_Impermanent-Loss_Calculation.js]
  License: [This work is licensed under CC BY-NC 4.0]
  Name: Liquidity Pool Supply Impermanent-Loss Calculation
  Description: Approximate liquidity pool supply profit/loss,  Impermanent-Loss calculation.

  Overview: [Purpose or description of the program]

This program is a concise arithmetic calculation function that fits on a short A4 page.
I want to make it clear that I have no knowledge of programming languages. 
However, I am very interested in cryptocurrencies and actively participate in DeFi, and I have written about impermanent loss in liquidity pools with a simple example.
Recognizing the need for a tool to roughly estimate these losses, I decided to create this program.

Although existing tools exist for this purpose, my goal was to develop a simple and easily understandable program for approximate calculations. This program would not have been possible without the help of ChatGPT3.5 (AI tool). The process of creating the program was simpler than I thought. We leveraged ChatGPT3.5 to generate approximate JavaScript code based on calculations performed in Excel. Afterwards, we validated it using Excel calculations and improved the code with the support of ChatGPT3.5 to match the expected results.

It's not complicated or technical, but this is my first program. It was initially written in Python, but considering open source principles, we dug deeper and built a GitHub homepage that allows the program to run on the web using JavaScript.

Caution
1. Fees, compensation, Trading volume, Asset price volatility, Market conditions, Asset proportion within the pool and other variables are not taken into account.
2, This is a tool that provides estimates for calculating temporary profits and losses and therefore does not represent exact returns.
Actual returns may vary due to market volatility and various influencing factors.
3. This calculator helps you estimate your rate of return, but it cannot accurately estimate your rate of return in all scenarios.
This is because impermanent losses vary depending on market conditions and include factors that are difficult to predict.

When you deposit two coins into a liquidity pool, this calculator provides an estimate of the rate of return based on providing liquidity to the pool.
When depositing into the liquidity pool, you can check the results by entering the quantity of coins A and B, the current dollar price, and the changed dollar price, then clicking 'Calculate'.
In a liquidity pool, the ratio is adjusted closer to 1:1 in response to price movements.
Due to changes in the dollar value of each coin and changes in the quantity of coins, the price may fluctuate when deposited into the liquidity pool, and the profit or loss may vary when supplying the liquidity pool.
I also hope this helps you understand roughly how impermanent loss occurs.
*/   
function calculate() {
    
        function calculate() {
    // Get input values
    const coinAInitialQuantity = parseFloat(document.getElementById('coinA-initial-quantity').value);
    const coinAInitialPrice = parseFloat(document.getElementById('coinA-initial-price').value);
    const coinACurrentPrice = parseFloat(document.getElementById('coinA-current-price').value);
    const coinBInitialQuantity = parseFloat(document.getElementById('coinB-initial-quantity').value);
    const coinBInitialPrice = parseFloat(document.getElementById('coinB-initial-price').value);
    const coinBCurrentPrice = parseFloat(document.getElementById('coinB-current-price').value);

    // Check for invalid inputs
    const inputs = [coinAInitialQuantity, coinAInitialPrice, coinACurrentPrice, coinBInitialQuantity, coinBInitialPrice, coinBCurrentPrice];
    if (inputs.some(input => isNaN(input) || input === 0 || (input.toString().startsWith('0') && !input.toString().includes('.')))) {
      document.getElementById('results').innerHTML = 'Invalid input. Please enter a valid number.';
      return;
    }

// Perform calculations
const coinAInvestmentAmount = coinAInitialQuantity * coinAInitialPrice;
const coinBInvestmentAmount = coinBInitialQuantity * coinBInitialPrice;
const totalInvestment = coinAInvestmentAmount + coinBInvestmentAmount;

const coinAChangedAmount = coinAInitialQuantity * coinACurrentPrice;
const coinBChangedAmount = coinBInitialQuantity * coinBCurrentPrice;
const totalChangedAmount = coinAChangedAmount + coinBChangedAmount;
const totalChangedDiff = totalChangedAmount - totalInvestment;

const initialKValue = coinAInitialQuantity * coinBInitialQuantity;

const coinBAdjustedQuantity = Math.sqrt((initialKValue / coinBCurrentPrice) * coinACurrentPrice);
const adjustedKValue = coinBAdjustedQuantity * coinBCurrentPrice;
const coinAAdjustedQuantity = initialKValue / coinBAdjustedQuantity;

const adjustedPoolAmount = (coinAAdjustedQuantity * coinACurrentPrice) + (coinBAdjustedQuantity * coinBCurrentPrice);

const impermanentLossPercentage = (((adjustedPoolAmount - totalChangedAmount) / totalChangedAmount) * 100).toFixed(4);
const profitPercentage = (((coinAAdjustedQuantity * coinACurrentPrice) + (coinBAdjustedQuantity * coinBCurrentPrice) - totalInvestment) / totalInvestment * 100).toFixed(4);

// Display results
const results = `

<div class="results-title">Results:</div>
  


  Coin A Investment Amount : $${coinAInvestmentAmount.toFixed(4)}<br>
  Coin B Investment Amount : $${coinBInvestmentAmount.toFixed(4)}<br>
  <strong><font color="red" style="background-color:yellow">Total Investment Amount :</font></strong> $${totalInvestment.toFixed(4)}<br><br>
  
  Coin A Changed Amount : $${coinAChangedAmount.toFixed(4)}<br>
  Coin B Changed Amount : $${coinBChangedAmount.toFixed(4)}<br>
  <strong><font color="red" style="background-color:yellow">Total Changed Amount:</font></strong> $${totalChangedAmount.toFixed(4)}<br><br>

  <strong><font color="red" style="background-color:yellow">Total Changed Difference :</font></strong> $${totalChangedDiff.toFixed(4)}<br><br>

  <strong>Quantity Of Coin A Adjusted Close To 1:1 Ratio :</strong> ${coinAAdjustedQuantity.toFixed(4)}<br>
  <strong>Quantity Of Coin B Adjusted Close To 1:1 Ratio :</strong> ${coinBAdjustedQuantity.toFixed(4)}<br><br>

  <strong>Adjusted Pool Amount :</strong> $${adjustedPoolAmount.toFixed(4)}<br><br>

  <strong><font color="red" style="background-color:yellow">Impermanent Loss Calculation :</font></strong> <span style="color: ${impermanentLossPercentage < 0 ? 'red' : 'black'};">${impermanentLossPercentage}%</span><br><br>
  <strong>Profit-Loss Calculation :</strong> <span style="color: ${profitPercentage >= 0 ? 'blue' : 'red'};">${profitPercentage}%</span><br>
`;
document.getElementById('results').innerHTML = results;

}

// 입력 필드 리셋 기능 추가
function resetFields() {
document.getElementById('coinA-initial-quantity').value = '100';
document.getElementById('coinA-initial-price').value = '0.1';
document.getElementById('coinA-current-price').value = '0.1';
document.getElementById('coinB-initial-quantity').value = '100';
document.getElementById('coinB-initial-price').value = '0.1';
document.getElementById('coinB-current-price').value = '0.1';
document.getElementById('results').innerHTML = '<div class="results-title">Results:</div>';
}
