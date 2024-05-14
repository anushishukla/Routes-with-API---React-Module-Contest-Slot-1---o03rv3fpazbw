import React, { useEffect, useState } from 'react';

const Top = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCoins(data.data.slice(0, 10));
    };

    fetchCoins();
  }, []);

  return (
    <div className="display-container">
      {coins.map(coin => (
        <div key={coin.id} className="coin">
          <h3>Rank {coin.rank}</h3>
          <p>{coin.name} ({coin.symbol})</p>
          <p>Price: ${coin.price_usd}</p>
        </div>
      ))}
    </div>
  );
};

export default Top;
