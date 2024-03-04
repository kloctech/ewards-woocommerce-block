import React, { useState } from 'react';
import axios from 'axios';
import '../styles/main.scss'
import AvailableCoupons from './available-coupons';

const VerifyOtp = ({mobileNumber,selectedCountry, otpSuccessMessage}) => {
  const [successMessage,setSuccessMessage] = useState("")
  const [errorMessage,setErrorMessage] = useState("")
  const[showResendOtp,setShowResendOtp] = useState(true)
  const [otp, setOtp] = useState('');
  const [showCoupons, setShowCoupons] = useState(false);
  const [noOtpMessage, setNoOtpMessage] = useState(false);
  const [otpForm,setOtpForm] = useState(false)
const [couponData,setCouponData]  = useState("")

  const handleOtpChange = (event) => {
    const value = event.target.value;
    if (value && value.length > 9) {
     setErrorMessage('otp should be 8 digits only');
    } else {
      setOtp(value);
     setErrorMessage("")
      setNoOtpMessage(false);
    }
  };
  const handleResendClick = async () => {
   setOtp("")
    setOtpForm(false)
   setErrorMessage("")
  const requestData = {
    mobile_number:mobileNumber,
    store_url:window.location.origin,
    country_code: selectedCountry,
  };
  console.log(requestData)
  await axios.post(`${PRDOUCTION_VAR.PRDOUCTION_URL}/api/ewards/customer-get-loyalty-info`, requestData)
  .then((response) => {
  })
  .catch((error) => {
     console.log(error.response.data.resultMessage.en)
  });
  };
  const handleotpInputBlur = () => {
    setNoOtpMessage(!otp);
  };

  const handleotpInputClick = () => {
    document.getElementById('otp-lable').classList.add('focused');
  };

  const handlegetloyaypoints =async (event) => {
     event.preventDefault();
    if (   otp.length !== 8) {
    setErrorMessage('otp should be 8 digits only');
      return;
    } 
    else {
     setErrorMessage("")
    }
    if (otp) {
      const requestData = {
        mobile_number:mobileNumber,
        country_code: selectedCountry,
        otp: otp,
        store_url: window.location.origin,
      };
    await axios.post(`${PRDOUCTION_VAR.PRDOUCTION_URL}/api/ewards/customer-loyalty-verify`, requestData)
        .then((response) => {
          setSuccessMessage(response.data);
         setErrorMessage("");
           setOtpForm(true);
          setCouponData(response.data.loyaltyInfo.response)
          setShowCoupons(true); 
          setShowResendOtp(false)
        })
        .catch((error) => {
         setErrorMessage(error.response.data.resultMessage.en);
          setShowCoupons(true);  
          setSuccessMessage("");
         setOtpForm(false)
         setShowResendOtp(true)
        });
    }
  };
  return (
    <>
      { otpSuccessMessage && (
        <form  onSubmit={handlegetloyaypoints} style={{display:'flex',marginBottom:'0px',width:'100%'}}>
          <div>
            <div className= {!successMessage || !otpForm? "mobile-otp-container" :"mobile-otp-container-blur"}>
              <div className={`wc-block-components-text-input ${noOtpMessage ? 'has-error' : ''}`}>
                <label htmlFor="otp" id="otp-lable" 
                className={`mobile-label ${otp|| document.activeElement === document.getElementById('otp') ? 'focused' : ''}`}
              >
                  Enter OTP
                </label>
                <input
               
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  disabled={otpForm}
                  onBlur={handleotpInputBlur}
                  onClick={handleotpInputClick}
                />
              </div>
              <div className='otpcontainer'>
                <button  disabled={otpForm} type="submit" className={ otpForm ? "button-element-disabled  otp-send-button" :"button-element-able otp-send-button"}
 >
                  <span  className="wc-block-components-button__text">Verify OTP</span>
                </button>
              </div>
            </div>
           
                      { noOtpMessage ? <p  className='error-msg-outlineing wc-block-components-validation-error'>Please enter OTP</p> : errorMessage ? <p  className='error-msg-outlineing wc-block-components-validation-error'>{errorMessage}</p>:""}

             <div className='otpbtncontianer-responsive'>
          <button
            
            type='submit'
            // onClick={sendOtpRequest}
          class= { otpForm ?  "otpbtn  button-element-disabled " : "otpbtn   button-element-able" }
          >
            <span class="wc-block-components-button__text">Verify OTP</span>
          </button>
        </div>
          </div>
        </form>
      )}

      { showResendOtp &&  otpSuccessMessage && (
        <p id="resendText" className='resendotptext' >
          Didn't Receive?{' '}
          <span className='resend-otp-text' onClick={handleResendClick}>Resend OTP</span>
        </p>
      )}

      {showCoupons && successMessage && <AvailableCoupons  couponData ={couponData}  />}
    </>
  );
};

export default VerifyOtp;
