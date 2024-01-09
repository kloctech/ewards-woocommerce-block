



import React, { useState } from "react";
import { Button, TextControl } from "@wordpress/components";
import "../style.scss";

const Coupons = () => {
  const data = [
    { title: "Coupon 1", date: "Valid: 12th June 2024", discount: "25% Off" ,id:"1"},
    { title: "Coupon 2", date: "Valid: 12th June 2024", discount: "25% Off",id:"2" },
    { title: "Coupon 3", date: "Valid: 12th June 2024", discount: "25% Off" ,id:"3"},
    { title: "Coupon 4", date: "Valid: 12th June 2024", discount: "25% Off" ,id:"4"},
    { title: "Coupon 5", date: "Valid: 12th June 2024", discount: "25% Off" ,id:"5"},
  ];
const [coupon,setCoupon] = useState("")
  const [backgroundColors, setBackgroundColors] = useState([
    { start: "#eaf5fd", end: "#afc2f7" },
    { start: "#ffcccc", end: "#ff6666" }, 
    { start: "#ccffcc", end: "#66ff66" }, 
    { start: "#ffffcc", end: "#ffcc00" }, 
    { start: "#f5f5f5", end: "#b3b3b3" }, 
  ]);



  const onButtonClick = (value) => {
    console.log(value)
    setCoupon(value)
  };

  return (
    <div>
      <h5 style={{fontWeight:'bold'}}>Redeem yout Loyalty points here</h5>
      <p>(value of each point is 10)</p>
      
      <div className="coupons">
      <p>Availble Balance: 100</p>
      <p>Redeemable Balance: 80</p>
      </div>
      <h2 className="textcolor">Choose/Enter Your loyalty coupon code here</h2>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="item-row">
            <div className="image-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={item.isChecked}
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
            <Button
              className="otpbutton"
              onClick={() => onButtonClick(item.title)}
            >
              Apply
            </Button>
          </div>
        ))}
      </div>
      <div style={{display:"flex",justifyContent:'end'}}>
        
      <TextControl type="text" value={coupon} />
      <Button className="otpbutton" style={{fontSize:"12px",marginTop:"10px"}}>Enter Coupon Code</Button>
      </div>
     

    </div>
  );
};

export default Coupons;
