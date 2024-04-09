import React, { useState } from "react";
import FinancialDataFetcher from "./components/FinancialDataFetcher";
import useDebounce from "./hooks/useDebounce";
import "./index.css";

function App() {
  const [symbol, setSymbol] = useState("");
  const debouncedSymbol = useDebounce(symbol, 1000);

  return (
    <div className="App p-5">
      <div className="mb-4">
        <input
          className="border border-gray-300 p-2 rounded mr-2"
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter stock symbol (e.g., IBM)"
        />
      </div>
      <FinancialDataFetcher symbol={debouncedSymbol} />
    </div>
  );
}

export default App;
