import React,{useState} from 'react'
import "../style.scss";

const AvailblePoints = ({couponCode, receiveCouponPoints}) => {
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
      setIsCouponpointsDisabled(true);
     

   }
  //  const handleclickcouponpoints = () => {
  //   const confirmation = window.confirm("You can't re-enter your points. Are you sure want to redeem?");
  
  //   if (confirmation) {
  //     setIsCouponpointsDisabled(true);
  //   }
  // };

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
        <form onSubmit = {handlesubmitcouponpoints}>
         <div >
         <div className={`points-redem-container1 wc-block-components-text-input ${iscouponpoints ? 'has-error' : ''}`}>
        <label
          htmlFor="0-coupon-points"
          id="coupon-points-lable"
          className={`mobile-label ${otp|| document.activeElement === document.getElementById('0-coupon-points') ? 'focused' : ''}`}

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
       className={ isCouponpointsDisable || couponCode ? "wp-element-button-disabled otp-send-button" :"wp-element-button-able otp-send-button"}

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
<button  type='submit'  class="creditpointsbtn components-button wc-block-components-button wp-element-button wc-block-cart__submit-button contained"><span class="wc-block-components-button__text">Credit Redemption</span></button>
</div> 
</form>     
  </div>
    </div>
  )
}
export default AvailblePoints
