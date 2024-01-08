### Liquidity Pool Supply Impermanent Loss Calculation

#### purpose
This program is a concise arithmetic calculation function that fits on a short A4 page.
I want to make it clear that I have no knowledge of programming languages.
However, I am very interested in cryptocurrencies and actively participate in DeFi, and I wrote about impermanent loss in liquidity pools with a simple example.
Recognizing the need for a tool to roughly estimate these losses, I decided to create this program.

Although existing tools exist, my goal was to develop a simple, easy-to-understand program for approximate calculations.
This program would not have been possible without the help of ChatGPT3.5 (AI tool). The process of creating the program was simpler than I thought.
I leveraged ChatGPT3.5 to generate rough JavaScript code based on calculations performed in Excel. The code was then validated using Excel calculations and improved with ChatGPT3.5 support to match expected results.

It's not complicated or technical, but this is my first program. It was initially written in Python, but we dug deeper and used JavaScript to build a GitHub homepage that allows the program to run on the web.

Refer to Uniswap V1 for reconciliation calculations. x * y = k (constant product formula)

This program is designed to estimate approximate liquidity pool supply P&L and impermanent loss calculations for two coins in a liquidity pool.
This serves as a tool to provide an expected rate of return when depositing two coins into a liquidity pool.
The ratio within the pool is adjusted closer to 1:1 in response to price fluctuations, which causes the value of deposited coins to fluctuate and thus either profit or loss the supply of the liquidity pool.

#### Usage
To use the program:
1. Enter the initial quantity and price of Coin A and Coin B.
2. Enter the current (future) prices of Coin A and Coin B.
3. Click the ‘Calculate’ button to see the estimation results.
4. Investment amount, floating amount, adjustment quantity close to 1:1 ratio, impermanent loss calculation and profit and loss calculation are displayed.

#####caution
- This tool provides temporary profit/loss estimates and does not represent exact returns. Actual returns may vary due to market volatility and other influencing factors.
- Impermanent losses are helpful in estimating profits, but are difficult to predict and depend on a variety of market conditions and factors that cannot accurately predict all scenarios.