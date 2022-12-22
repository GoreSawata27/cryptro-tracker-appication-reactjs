import React from 'react'
import '../Components/Navbar.css'

export default function Navbar(props) {

    const handelSelect =(e)=>{
      const value = e.target.value
      props.onSelect(value)
    }
  
  return (
    < >
     <div className="navbar">
        <div className="logo">CryptroTracker</div>
        <div className="select">
          <select onChange={handelSelect}>
            <option>Sort by</option>
            <option value="Price">Price</option>
            <option className="hide-mobile" value="MarketCap">
              MarketCap
            </option>
            <option value="%1h">%1h</option>
            <option value="%1d">%1d</option>
            <option className="hide-mobile" value="%1d">%1w</option>
            <option value="Favorite">favourites</option>
          </select>
        </div>
      </div>
    </>
  )
}
