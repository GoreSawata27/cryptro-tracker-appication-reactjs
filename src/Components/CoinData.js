import React from "react";
import "../Components/CoinData.css";

export default function CoinData({ coins,handelFavorite }) {

  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="hide-mobile">Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th className="hide-mobile">MarketCap</th>
            <th className="hide-mobile">Volume</th>
            <th className="hide-mobile">Supply</th>
            <th>% 1h</th>
            <th>% 1d</th>
            <th className="hide-mobile">% 1w</th>
            <th className="hide-mobile">favourite</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => {
            return (
              <tr key={coin.id} className=" coin-row">
                <td data-aria-label="Rank">{coin.rank}</td>
                <td data-aria-label='Name'>
                  <div className="img-symbol coin-name ">
                    <img src={coin.icon} alt="img" />
                    {coin.name.slice(0, 8)}
                  </div>
                </td>
                <td data-aria-label="Rank" >${coin.price.toFixed(0).toLocaleString()}</td>
                <td data-aria-label ='MarketCap'>${coin.marketCap.toFixed(0).toLocaleString()}</td>
                <td data-aria-label='Volume'>${coin.volume.toFixed(0)}</td>
                <td data-aria-label='Supply'>${coin.availableSupply.toFixed(0)} </td>
                <td data-aria-label='% 1h'>{coin.priceChange1h.toFixed(2)}%</td>
                <td data-aria-label='%1d'>{coin.priceChange1d.toFixed(2)}%</td>
                <td data-aria-label='% 1w'>{coin.priceChange1w.toFixed(2)}%</td>
                <td data-aria-label='Favorite'>
                  <button
                    className="Fav-button"
                    onClick={() => handelFavorite(coin)}
                    disabled={coin.isFavorite}
                  >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
