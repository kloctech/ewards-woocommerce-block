import React,{useState} from 'react'
import "../style.scss";

const AvailblePoints = () => {
   const [couponPoints,SetCouponPoints] = useState("")
   const [iscouponpoints,Setiscouponpoints] =  useState(false)
   const [isCouponpointsDisabled, setIsCouponpointsDisabled] = useState(false);

   const hanldeCoupons =  (event) =>{
      Setiscouponpoints(false)

      SetCouponPoints(event.target.value)
    }
    const handleCouponPointsInputClick = () => {
      document.getElementById('coupon-points-lable').classList.add('focused');
      
    };
  
    const handleCouponPointsInputBlur = () => {
      Setiscouponpoints(!couponPoints);
       // Set isError to true if mobile is empty
      //  document.getElementById('coupon-points-lable').classList.remove('focused');

     
    };
   //  const handleCouponPointsInputfocus = () =>{
   //    Setiscouponpoints(!couponPoints)
     
   //  }
   const handlesubmitcouponpoints =(event)=>{
    event.preventDefault()
   }
   const handleclickcouponpoints = () => {
    const confirmation = window.confirm("You can't re-enter your points. Are you sure want to redeem?");
  
    if (confirmation) {
      setIsCouponpointsDisabled(true);
    }
  };
  
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
        <from onSubmit = {handlesubmitcouponpoints}>
         <div >
         <div className={`points-redem-container1 wc-block-components-text-input ${iscouponpoints ? 'has-error' : ''}`}>
        <label
          htmlFor="0-coupon-points"
          id="coupon-points-lable"
          className={`${couponPoints || document.activeElement === document.getElementById('0-coupon-points') ? 'focused' : 'centered'}`}
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
          disabled={isCouponpointsDisabled}

         //  onFocus={handleCouponPointsInputfocus}
        />
        <div className='otpcontainer'>
          <button onClick={handleclickcouponpoints}
            className="wc-block-components-button wp-element-button otp-send-button"
          >
            <span>Credit Redemption</span>
          </button>
        </div>
      </div>
      {/* Error message for Coupon Points */}
      {iscouponpoints && (
        <p style={{ paddingLeft: "50px", marginTop: "-10px" }} className='wc-block-components-validation-error'>Please enter coupon points </p>
      )}
         </div>
         <div className='otpbtncontianer-responsive'>
<a  onClick={handleclickcouponpoints}  class="creditpointsbtn components-button wc-block-components-button wp-element-button wc-block-cart__submit-button contained"><span class="wc-block-components-button__text">Credit Redemption</span></a>
</div> 
</from>     
  </div>
    </div>
  )
}
export default AvailblePoints
