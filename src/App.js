import { useEffect, useState } from "react";
import "./App.css";
import CoinData from "./Components/CoinData";
import Navbar from "./Components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);


  const [loadMore, setLoadMore] = useState(20);
  const [fevorite, setFevorite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const FetchCoins = async () => {
    try {
      const data = await fetch(
        `https://api.coinstats.app/public/v1/coins?skip=0&limit=${loadMore}&currency=EUR`
      );
      const result = await data.json();
      const Fav_store = result?.coins?.map((item) => {
        return { ...item, isFavorite: false };
      });
      setCoins(Fav_store);
      setLoading(false);
    } catch (error) {
      setError(error.msg);
    }
  };

  const handelSelec = (value) => {
    const name = value;
    if (name === "Price") {
      const store = coins?.sort((a, b) => b?.price - a?.price);
      setCoins([...store]);
    } else if (name === "MarketCap") {
      const store = coins?.sort((a, b) => b?.marketCap - a?.marketCap);
      setCoins([...store]);
    } else if (name === "%1h") {
      const store = coins?.sort((a, b) => b?.priceChange1h - a?.priceChange1h);
      setCoins([...store]);
    } else if (name === "%1d") {
      const store = coins?.sort((a, b) => b?.priceChange1d - a?.priceChange1d);
      setCoins([...store]);
    } else if (name === "Favorite") {
      const store = fevorite.sort();
      setCoins([...store]);


    }
  };
  const handelMore = () => {
    setLoadMore((prev) => prev + 15);
  };

  const handelFavorite = (coin) => {
    const store = coins.map((item) => {
      return {
        ...item,
        coin,
        isFavorite: coin.id === item.id ? true : false,
      };
    });

    setCoins(store);
    const arr = [...new Set(fevorite)];
    arr.push(coin);
    setFevorite(arr);

  };

  useEffect(() => {
    FetchCoins();
  }, [loadMore]);

  if (error) {
    return <div> {error}</div>;
  }
  return (
    <div className="App">
      <Navbar onSelect={handelSelec} />
      {loading ? (
        <div>Loading... </div>
      ) : (
        <>
          <CoinData coins={coins} setCoins={setCoins} handelFavorite={handelFavorite} />
          <div className="loadMore">
            <button onClick={handelMore} className="btn">
              Load More
            </button>
          </div>
        </>

      )}

    </div>
  );
}

export default App;
