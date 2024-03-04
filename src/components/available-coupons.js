import React, { useState, useEffect } from "react";
import { Button, TextControl } from "@wordpress/components";
import '../styles/couponcode/couponcode.scss'
import Loader from "./loader";
import AvailblePoints from "./available-points";
const AvailableCoupons = ({couponData }) => {
  const [activeLink, setActiveLink] = useState("REWARDS");
  const [couponCode,setCouponCode] = useState("")
  const[coupon,setCoupon] = useState("")
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
    { start: "#ffcccc", end: "#ff6666" },
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
  console.log("Received Coupon Points in Coupons component:", points);
    setcouponpoins(points)
};
 
  return (
    <div>
      {!couponData? (
        <Loader />
      ) : (
        <>
        <AvailblePoints couponCode={couponCode} receiveCouponPoints={receiveCouponPoints} couponData = {couponData}></AvailblePoints>
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
              {couponData?.coupons?.tokens?.map((item, index) => (
                <div key={index} className="couponradiobutton">
                  <div className="image-container">
                    <input
                      type="radio"
                      className="checkbox"
                      checked={selectedReward === index}
                      onChange={() => handleRewardSelection(index)}
                    />
                  </div>
                  <div
                    className="couponcodecontainer"
                    style={{
                      background: `linear-gradient(to top left, ${backgroundColors[index%10].start} 50%, ${backgroundColors[index].end} 50%)`,
                      marginBottom: "10px",
                    }}
                  >
                    <div className="coupondiscountcontainer"></div>
                    <div className="coupondiscounttext">{item.token_code}</div>
                  </div>
                  <div className="couponname">
                    <h4 className="coupon">{item.token_code}</h4>
                    <p className="validcoupon">Valid:{item.valid_till}</p>
                  </div>
                  <Button className="applybutton" onClick={() => onButtonClick(item.token_code)}>
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          ) : activeLink === "TOKENS" ? (
            <div className="tokes-rewards-coupons-container">
              {couponData?.coupons?.tokens?.map((item, index) => (
                <div key={index} className="couponradiobutton">
                  <div className="image-container">
                    <input
                      type="radio"
                      className="checkbox"
                      checked={selectedToken === index}
                      onChange={() => handleTokenSelection(index)}
                    />
                  </div>
                  <div
                    className="couponcodecontainer"
                    style={{
                      background: `linear-gradient(to top left, ${backgroundColors[index].start} 50%, ${backgroundColors[index].end} 50%)`,
                      marginBottom: "10px",
                    }}
                  >
                    <div className="coupondiscountcontainer"></div>
                    <div className="coupondiscounttext">{item.token_code}</div>
                  </div>
                  <div className="couponname">
                    <h4 className="coupon">{item.token_code}</h4>
                    <p className="validcoupon">Valid:{item.valid_till}</p>
                  </div>
                  <Button className="applybutton" onClick={() => onButtonClick(item.token_code)}>
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
          className={`mobile-label ${couponCode|| document.activeElement === document.getElementById('0-coupon-code') ? 'focused' : ''}`}
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
        />
        <div className='otpcontainer'>
          <button style={{height:'3em',marginTop:"10px"}}
          onClick={handleclickcouponcode}
          className={ isCouponcodeDisabled ? "button-element-disabled otp-send-button" :"button-element-able otp-send-button"}>
            <span>Enter coupon code</span>
          </button>
        </div>
      </div>
      {iscouponcode && (
        <p className='wc-block-components-validation-error coupon-code-error-msg-otulineing'>Please enter coupon code </p>
      )}
         </div>
         <div className='otpbtncontianer-responsive'>
<button  onClick={handleclickcouponcode} style={{height:'3em'}}  
className={ isCouponcodeDisabled ? "button-element-disabled creditpointsbtn" :"button-element-able creditpointsbtn"}
><span class="wc-block-components-button__text">Enter coupon code</span></button>
</div>
</form>
</div>
</>
  )}
</div>
  );
};
export default AvailableCoupons;