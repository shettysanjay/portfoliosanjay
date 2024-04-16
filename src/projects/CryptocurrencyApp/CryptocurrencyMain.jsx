import React, { useState, useEffect } from "react";
import Coins from "./Coins";
import "./coins.css";

const CryptocurrencyMain = () => {
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("");
  const fetchCoins = async () => {
    await fetch("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCoins(result.coins);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="type the coin..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="coins_search"
      />
      {coins ? <Coins coinsList={coins} searchInput={input} /> : <div></div>}
    </div>
  );
};

export default CryptocurrencyMain;
