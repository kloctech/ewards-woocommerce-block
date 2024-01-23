import React, { useState, useEffect } from "react";
import { Button, TextControl } from "@wordpress/components";
import "../style.scss";
import Loader from "./Loader";
import AvailblePoints from "./availble-points";
const Coupons = ({ rewardsData, tokensData }) => {
  const [coupon, setCoupon] = useState("");
  const [activeLink, setActiveLink] = useState("REWARDS");
  const [couponCode,setCouponCode] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReward, setSelectedReward] = useState(null);
  const [selectedToken, setSelectedToken] = useState(null);
  const [backgroundColors, setBackgroundColors] = useState([
    { start: "#b4c5d1", end: "#6ba7d1" },
    { start: "#ffcccc", end: "#ff6666" },
    { start: "#ccffcc", end: "#66ff66" },
    { start: "#e5eb94", end: "#ffcc00" },
    { start: "#f5f5f5", end: "#b3b3b3" },
  ]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  const onButtonClick = (value) => {
    console.log(value);
    setCoupon(value);
    setCouponCode(value)
    SetCouponPoints(value)
  };
  const handlerewards = () => {
    setActiveLink("REWARDS");
  };
  const handlerTokens = () => {
    setActiveLink("TOKENS");
  };
  const handleRewardSelection = (index) => {
    setSelectedReward(index);
  };
  const handleTokenSelection = (index) => {
    setSelectedToken(index);
  };
const handleCouponcode = (event) =>{
  setCoupon(event.target.value)
  setCouponCode(event.target.value)
}
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <AvailblePoints></AvailblePoints>
          <p style={{ fontWeight: "bold" }}>Choose/Enter Your loyalty coupon code here</p>
          <div className="topnav">
            <a className={activeLink === "REWARDS" ? "active" : ""} onClick={handlerewards}>
              REWARDS
            </a>
            <a className={activeLink === "TOKENS" ? "active" : ""} onClick={handlerTokens}>
              TOKENS
            </a>
          </div>

          {activeLink === "REWARDS" ? (
            <div className="tokes-rewards-coupons-container">
              {rewardsData.map((item, index) => (
                <div key={index} className="item-row">
                  <div className="image-container">
                    <input
                      type="radio"
                      className="checkbox"
                      checked={selectedReward === index}
                      onChange={() => handleRewardSelection(index)}
                    />
                  </div>
                  <div
                    className="container1"
                    style={{
                      background: `linear-gradient(to top left, ${backgroundColors[index].start} 50%, ${backgroundColors[index].end} 50%)`,
                      marginBottom: "10px",
                    }}
                  >
                    <div className="triangle"></div>
                    <div className="text">{item.discount}</div>
                  </div>
                  <div className="title">
                    <h4 className="coupon">{item.title}</h4>
                    <p className="validcoupon">{item.date}</p>
                  </div>
                  <Button className="otpbutton" onClick={() => onButtonClick(item.title)}>
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          ) : activeLink === "TOKENS" ? (
            <div className="tokes-rewards-coupons-container">
              {tokensData.map((item, index) => (
                <div key={index} className="item-row">
                  <div className="image-container">
                    <input
                      type="radio"
                      className="checkbox"
                      checked={selectedToken === index}
                      onChange={() => handleTokenSelection(index)}
                    />
                  </div>
                  <div
                    className="container1"
                    style={{
                      background: `linear-gradient(to top left, ${backgroundColors[index].start} 50%, ${backgroundColors[index].end} 50%)`,
                      marginBottom: "10px",
                    }}
                  >
                    <div className="triangle"></div>
                    <div className="text">{item.discount}</div>
                  </div>
                  <div className="title">
                    <h4 className="coupon">{item.title}</h4>
                    <p className="validcoupon">{item.date}</p>
                  </div>
                  <Button className="otpbutton" onClick={() => onButtonClick(item.title)}>
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p>No data found</p>
          )}
        <div className="points-redem-container">
         <div class="wc-block-components-text-input wc-block-components-totals-coupon__input ">
           <input type="text"
           value={couponCode}
           onChange={handleCouponcode}
          />
           </div>
           <button style ={{height:"3em"}}class="wc-block-components-button wp-element-button otp-send-button">
            <span class="wc-block-components-button__text">Enter Coupon Code</span>
            </button>
         </div>
         <div className="points-redem-containe-responsive">
         <div class="wc-block-components-text-input wc-block-components-totals-coupon__input ">
           <input type="text"
           value={couponCode}
           onChange={handleCouponcode}
          />
           </div>
           <button class="wc-block-components-button wp-element-button otp-send-button">
            <span class="wc-block-components-button__text">Enter Coupon Code</span>
            </button>
         </div>
        </>
      )}
    </div>
  );
};
export default Coupons;