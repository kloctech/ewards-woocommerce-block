import React,{useState} from 'react'
import "../style.scss";

const AvailblePoints = () => {
   const [couponPoints,SetCouponPoints] = useState("")

   const hanldeCoupons =  (event) =>{
      SetCouponPoints(event.target.value)
    }
  return (
    <div>
       <p style={{ fontWeight: "bold" }}>Redeem your Loyalty points here</p>
          <h5 style={{ fontWeight: "bold" }}>(value of each point is 10)</h5>
          <div className='points-container' >
          <div className="available-balance-container">
               <div>
               <p  className="availblepointsmarging">Available  Balance:</p>
                <p  className="availblepointsmarging">Redeemable Balance:</p>
               </div>
               <div>
               <p  className="availblepointsmarging">100</p>
                <p  className="availblepointsmarging">80</p>
               </div>
            </div>
            <div className="points-redem-container1">
         <div class="wc-block-components-text-input wc-block-components-totals-coupon__input is-active">
           <input type="text"
           value={couponPoints}
           onChange={hanldeCoupons}
          />
           </div>
           <button class="wc-block-components-button wp-element-button otp-send-button">
            <span class="wc-block-components-button__text">Credit Redemption</span>
            </button>
         </div>
           
            </div>
    </div>
  )
}
export default AvailblePoints
