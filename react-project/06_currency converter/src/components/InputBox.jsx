import React from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOftion = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = ""
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(Number(this.target.value));
          }}
          disabled={currencyDisabled}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOftion.map((currency) => (
            <option key={currency} value={currency}>
              {" "}
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
