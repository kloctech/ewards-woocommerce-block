import React,{useState} from 'react'

import '../styles/couponpoints/couponpoints.scss'
const AvailblePoints = ({couponCode, receiveCouponPoints,couponData}) => {
   const [couponPoints,SetCouponPoints] = useState("")
   const [iscouponpoints,Setiscouponpoints] =  useState(false)
   const [isCouponpointsDisable, setIsCouponpointsDisabled] = useState(false);
   const hanldeCoupons =  (event) =>{
    SetCouponPoints(event.target.value)
      Setiscouponpoints(false)
      receiveCouponPoints(event.target.value);
    }
    const handleCouponPointsInputClick = () => {
      document.getElementById('coupon-points-lable').classList.add('focused');
    };
    const handleCouponPointsInputBlur = () => {
      Setiscouponpoints(!couponPoints);
    };
   const handlesubmitcouponpoints =(event)=>{
    event.preventDefault()
      setIsCouponpointsDisabled(true)
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
               <p  className="availblepointsmarging">{couponData?.points_available}</p>
                <p  className="availblepointsmarging">80</p>
               </div>
            </div>
        <form onSubmit = {handlesubmitcouponpoints}>
         <div >
         <div className={`points-redem-container1 wc-block-components-text-input ${iscouponpoints ? 'has-error' : ''}`}>
        <label
          htmlFor="0-coupon-points"
          id="coupon-points-lable"
          className={`mobile-label ${couponPoints|| document.activeElement === document.getElementById('0-coupon-points') ? 'focused' : ''}`}

        >
          Coupon Points
        </label>
        <input
          type="text"
          id="0-coupon-points"
          value={couponPoints}
          onChange={hanldeCoupons}
          onBlur={handleCouponPointsInputBlur}
          onClick={handleCouponPointsInputClick}
          disabled ={couponCode !== "" || isCouponpointsDisable}

         //  onFocus={handleCouponPointsInputfocus}
        />
        <div className='otpcontainer'>
          <button type='submit'
       className={ isCouponpointsDisable || couponCode ? " button-element-disabled otp-send-button" :"button-element-able otp-send-button"}

          >
            <span>Credit Redemption</span>
          </button>
        </div>
      </div>
      {/* Error message for Coupon Points */}
      {iscouponpoints && (
        <p className='coupon-points-error-msg-otulineing wc-block-components-validation-error'>Please enter coupon points </p>
      )}
         </div>
         <div className='otpbtncontianer-responsive'>
<button  type='submit'         
className={ isCouponpointsDisable || couponCode ? " button-element-disabled creditpointsbtn" :"button-element-able creditpointsbtn"}
><span class="wc-block-components-button__text">Credit Redemption</span></button>
</div> 
</form>     
  </div>
    </div>
  )
}
export default AvailblePoints
