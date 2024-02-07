import React, { useState, useEffect } from "react";
import { Button, TextControl } from "@wordpress/components";
import "../style.scss";
import Loader from "./loader";
import AvailblePoints from "./available-points";
const Coupons = ({ rewardsData, tokensData,isCouponpointsDisabled  }) => {
  const [coupon, setCoupon] = useState("");
  const [activeLink, setActiveLink] = useState("REWARDS");
  const [couponCode,setCouponCode] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReward, setSelectedReward] = useState(null);
  const [selectedToken, setSelectedToken] = useState(null);
  const [iscouponcode,Setiscouponcode] =  useState(false)
  const [isCouponcodeDisabled, setIsCouponcodesDisabled] = useState(false);
const [couponpoins,setcouponpoins] = useState("")
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
   
    Setiscouponcode(false)
    setCoupon(value)
    setCouponCode(value)
    setIsCouponcodesDisabled(false);
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
  Setiscouponcode(false)
  setCoupon(event.target.value)
  setCouponCode(event.target.value)
  setIsCouponcodesDisabled(false); // Disable if coupon points is filled

}
const handleCouponPointsInputClick = () => {
  document.getElementById('coupon-code-lable').classList.add('focused');
};
const handleCouponPointsInputBlur = () => {
  Setiscouponcode(!couponCode);
};

const handlesubmitcouponcode = (event) =>{
  event.preventDefault()
}
const handleclickcouponcode = () => {
  const confirmation = window.confirm("You can't re-enter your coupon code. Are you sure?");

  if (confirmation) {
    setIsCouponcodesDisabled(true);
  }
};
const receiveCouponPoints = (points) => {
  // Do something with the coupon points in the Coupons component
  console.log("Received Coupon Points in Coupons component:", points);
  setcouponpoins(points)
};
console.log(couponpoins)
// console.log(couponpoins)
// useEffect (()=>{
// receiveCouponPoints()
// })
// console.log(isCouponpointsDisabled)
console.log(couponCode)
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <AvailblePoints couponCode={couponCode} receiveCouponPoints={receiveCouponPoints}></AvailblePoints>
          <p style={{ fontWeight: "bold" }}>Choose/Enter Your loyalty coupon code here</p>
          <div className="topnav">
            <a className={activeLink === "REWARDS" ? "active" : ""} onClick={handlerewards}>
              REWARDS
            </a>
            <a className={activeLink === "TOKENS" ? "active" : ""} onClick={handlerTokens}>
              TOKENS
            </a>
          </div>
          <div>
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
                      background: `linear-gradient(to top left, ${backgroundColors[index%10].start} 50%, ${backgroundColors[index].end} 50%)`,
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
       
<form onSubmit = {handlesubmitcouponcode}>
<div >
         <div className={`points-redem-container wc-block-components-text-input ${iscouponcode ? 'has-error' : ''}`}>
        <label
          htmlFor="0-coupon-code"
          id="coupon-code-lable"
          className={`${couponCode || document.activeElement === document.getElementById('0-coupon-code') ? 'focused' : 'centered'}`}
        >
          Coupon code
        </label>
        <input
          type="text"
          id="0-coupon-code"
          disabled={isCouponcodeDisabled || couponpoins !== ""}

          value={couponCode}
          onChange={handleCouponcode}
          onBlur={handleCouponPointsInputBlur}
          onClick={handleCouponPointsInputClick}
         //  onFocus={handleCouponPointsInputfocus}
        />
        <div className='otpcontainer'>
          <button style={{height:'3em',marginTop:"10px"}}
          onClick={handleclickcouponcode}
          className={ isCouponcodeDisabled ? "wp-element-button-disabled otp-send-button" :"wp-element-button-able otp-send-button"}

          >
            <span>Enter coupon code</span>
          </button>
        </div>
      </div>
      {/* Error message for Coupon Points */}
      {iscouponcode && (
        <p className='wc-block-components-validation-error coupon-code-error-msg-otulineing'>Please enter coupon code </p>
      )}
         </div>
         <div className='otpbtncontianer-responsive'>
<button  onClick={handleclickcouponcode} style={{height:'3em'}} class="creditpointsbtn components-button wc-block-components-button wp-element-button wc-block-cart__submit-button contained"><span class="wc-block-components-button__text">Enter coupon code</span></button>
</div>
</form>
</div>
</>
  )}
</div>
  );
};
export default Coupons;