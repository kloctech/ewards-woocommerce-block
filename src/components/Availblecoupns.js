import React, { useState, useEffect } from "react";
import { Button, TextControl } from "@wordpress/components";
import "../style.scss";

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

const Coupons = ({ rewardsData, tokensData }) => {
  const [coupon, setCoupon] = useState("");
  const [activeLink, setActiveLink] = useState("REWARDS");
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
  };

  const handlerewards = () => {
    console.log("hello wchow");
    setActiveLink("REWARDS");
  };

  const handlerTokens = () => {
    console.log("handling tokens");
    setActiveLink("TOKENS");
  };

  const handleRewardSelection = (index) => {
    setSelectedReward(index);
  };

  const handleTokenSelection = (index) => {
    setSelectedToken(index);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h5 style={{ fontWeight: "bold" }}>Redeem your Loyalty points here</h5>
          <p>(value of each point is 10)</p>         
          <div >
            </div> 
            <div className="coupons">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p style={{ display: "inline-block", margin: "0", textAlign: "center" }}>Available Balance:</p>
                <p> 100</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p style={{ display: "inline-block", margin: "0", textAlign: "center" }}>Redeemable Balance:</p>
                <p>80</p>
              </div>
             
            </div>
            <div style={{ display: "flex", justifyContent: "end",marginBottom:"20px" }}>
            <TextControl type="text" value={coupon} />
            <Button className="otpbutton" style={{ fontSize: "12px", marginTop: "10px" }}>
              Credit Redemption
            </Button>
          </div>
          <h5 >Choose/Enter Your loyalty coupon code here</h5>
          <div className="topnav">
            <a className={activeLink === "REWARDS" ? "active" : ""} onClick={handlerewards}>
              REWARDS
            </a>
            <a className={activeLink === "TOKENS" ? "active" : ""} onClick={handlerTokens}>
              TOKENS
            </a>
          </div>

          {activeLink === "REWARDS" ? (
            <div className="container">
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
                  <Button class="otpbutton" onClick={() => onButtonClick(item.title)}>
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          ) : activeLink === "TOKENS" ? (
            <div className="container">
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

          <div style={{ display: "flex", justifyContent: "end" }}>
            <TextControl type="text" value={coupon} />
            <Button className="otpbutton" style={{ fontSize: "12px", marginTop: "10px" }}>
              Enter Coupon Code
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Coupons;
