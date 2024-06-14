import { useState } from "react";
import backgroundImage from "../src/assets/backgroundImage.jpg";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [fromAmount, setFromAmount] = useState("0");
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  let options = [];

  const currencyInfo = useCurrencyInfo(fromCurrency);
  // console.log("currencyInfo is :", currencyInfo);
  options = Object.keys(currencyInfo);

  // console.log(options);

  function convertCurrency() {
    console.log(`fromCurrency: ${fromCurrency} toCurrency: ${toCurrency}`);
    const rate = currencyInfo[toCurrency];
    setToAmount(fromAmount * rate);
    console.log("To Amount is :", toAmount);
  }

  function swapCurrency() {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={fromAmount}
                onAmountChange={(amount) => setFromAmount(amount)}
                amountDisabled={false}
                currency={fromCurrency}
                options={options}
                onCurrencyChange={async (currency) => {
                  await setFromCurrency(currency);
                  // convertCurrency()
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapCurrency}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toAmount}
                onAmountChange={(amount) => setFromAmount(amount)}
                amountDisabled={true}
                currency={toCurrency}
                options={options}
                onCurrencyChange={async (currency) => {
                  await setToCurrency(currency);
                  // convertCurrency()
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convertCurrency}
            >
              Convert {fromCurrency} to {toCurrency}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
