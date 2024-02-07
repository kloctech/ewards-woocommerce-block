import React, { useState,useEffect } from 'react';
import axios from 'axios';
import CountryCodes1 from '../countires.json';

import Coupons from './available-coupons';

const SendOtp = () => {
  const [mobile, setMobileNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("91");
  const [otpsucmsg, setotpsucmsg] = useState('');
  const [opterrmsg, setotperror] = useState('');
  const [verifyotpsusmsg, setverifyotpsucmsg] = useState('');
  const [verifyotperrmsg, setverifyotperrmsg] = useState('');
  // const [isFrozen, setFrozen] = useState(false);
  const [ismobileNumber,setIsmobileNumeber]  = useState(false)
  const [otp, setOtp] = useState('');
  const [showCoupons, setShowCoupons] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [noopt, setnoopt] = useState(false);
  const [otpform, setotpform] = useState(false);

  const rewardsData = [
    { title: "Coupon 1", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Coupon 2", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
  { title: "Coupon 1", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Coupon 2", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Coupon 2", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
   
  ];

  const tokensData = [
    { title: "Token 1", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
   
  ];

  const CountryCodes = CountryCodes1.countries.map((country) => ({
    value: country.code,
    label: country.code,
  }));

  const handleCountryChange = (selectedValue) => {
    setSelectedCountry(selectedValue);
  };

  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
    setIsError(false);
    if (value && value.length > 10) {
      setError('Mobile number must be 10 digits.');
    } else {
      setError('');
      setotperror("")
      setMobileNumber(value);
    }
  };


  const handleOtpChange = (event) => {
    const value = event.target.value;
    setnoopt(false);
    setOtp(value);
  };

  const handleResendClick = () => {
   
    setIsmobileNumeber(false)
    setotpform(false)

  };

  const handleInputClick = () => {
    document.getElementById('0-mobile-label').classList.add('focused');
  };

  const handleInputBlur = () => {
    setIsError(!mobile); // Set isError to true if mobile is empty
  };

  const handleotpInputBlur = () => {
    setnoopt(!otp);
  };

  const handleotpInputClick = () => {
    document.getElementById('otp-lable').classList.add('focused');
  };

  const handlemobilenumberSubmit =async (event) => {  
     event.preventDefault()
    if (   mobile.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
    setIsError(false)
      return;
    } 
    else {
      setError('');
    }
    if (!ismobileNumber && selectedCountry && mobile) {
      const requestData = {
        mobile_number:mobile,
        store_url:window.location.origin,
        country_code: selectedCountry,
      };
    
  //   const rewardsData ={
  //     "customer_key": "Shopify_test",
  //     "merchant_id": "15441607",
  //     "mobile": "8553831358",
  //     "country_code": "91"
  // }
     await axios.post(`${PRDOUCTION_VAR.PRDOUCTION_URL}/api/ewards/customer-get-loyalty-info`, requestData)
        .then((response) => {
        //  setSuccessMessage(response.message);
          // setError('');
          //  setotpsucmsg(response.data.otpResponse.response.message);
           setotpsucmsg(response.data.otpResponse.response.message)
          console.log(response.data.otpResponse.response.message)
        
           setIsmobileNumeber(true)
        })
        .catch((error) => {
        
          // setotperror(error.response.data.resultMessage.en);
          // console.log(error.message)
           console.log(error.response.data.resultMessage.en)
           setotperror(error.response.data.resultMessage.en)
          //  setIsmobileNumeber(true)
        });
      }
  };
  const handlegetloyaypoints = (event) => {
    event.preventDefault();
    if (otp && selectedCountry && mobile) {
      const requestData = {
        mobile_number: mobile,
        country_code: selectedCountry,
        otp: otp,
        store_url: window.location.origin,
      };

      axios.post(`${PRDOUCTION_VAR.PRDOUCTION_URL}/api/ewards/customer-loyalty-verify`, requestData)
        .then((response) => {
         
          setverifyotpsucmsg(response.data);
          setverifyotperrmsg("");
           setotpform(true);
          console.log(response.data.loyalyInfo)
          setShowCoupons(true); // Set showCoupons to true on successful verification
        })
        .catch((error) => {
          console.error(error.response.data.resultMessage.en);
          setverifyotperrmsg(error.response.data.resultMessage.en);
          setShowCoupons(true);  // Ensure showCoupons is false on verification failure
          setverifyotpsucmsg("");
         setotpform(false);
          
        });
    }
  
    
  };
  // useEffect(() => {
  //   let timeoutId;
  //   const showText = () => {
  //     document.getElementById('resendText').style.display = 'block';
  //     timeoutId = setTimeout(() => {
  //       document.getElementById('resendText').style.display = 'none';
  //     }, 3000);
  //   };

  //   showText();
  //   return () => clearTimeout(timeoutId);
  // }, []);
  console.log(opterrmsg)
  return (
    <>
      <div>
        <form onSubmit={handlemobilenumberSubmit}>
          <div className= {!otpsucmsg   ||  !ismobileNumber ? "mobile-otp-container" :"mobile-otp-container-blur"}>
            <div class="wc-block-components-text-input wc-block-components-totals-coupon__input selectcontrol">
              <input
                type='text'
                value={selectedCountry}
                options={CountryCodes}
                onChange={handleCountryChange}
                disabled={ismobileNumber}
              />
            </div>
            <div className={`wc-block-components-text-input ${isError ? 'has-error' : ''}`}>
              <label
                htmlFor="0-mobile"
                id="0-mobile-label"
                className={`${mobile || document.activeElement === document.getElementById('0-mobile') ? 'focused' : 'centered'}`}
              >
                Mobile Number
              </label>
              <input
                type="number"
                id="0-mobile"
                value={mobile}
                onChange={handleMobileNumberChange}
                disabled={ismobileNumber}
                onBlur={handleInputBlur}
                onClick={handleInputClick}
              />
            </div>
            <div className='otpcontainer'>
              <button
                disabled={ismobileNumber}
                type="submit"
               className={ ismobileNumber ? "wp-element-button-disabled otp-send-button" :"wp-element-button-able otp-send-button"}
              >
                <span class="">Receive OTP</span>
              </button>
            </div>
          </div>
          { isError ? <p  className='error-msg-outlineing wc-block-components-validation-error'>Please enter mobile number</p> : error ?  <p  className='error-msg-outlineing wc-block-components-validation-error error-msg-outlineing'>{error}</p> : opterrmsg ? <p class="wc-block-components-validation-error error-msg-outlineing">{opterrmsg}</p> : <p className="wc-block-components-validation-success error-msg-outlineing">{otpsucmsg}</p>}
        
          {/* {opterrmsg === "Customer not found." ? (
        <a href={`${window.location.origin}/my-account/`}>
          Don't have an account? Create one here.
        </a>
      ) : (
        ""
      )}   */}
        <div className='otpbtncontianer-responsive' disabled={!ismobileNumber}>
          <button
            type='submit'
            // onClick={sendOtpRequest}
          class= { ismobileNumber ?  "otpbtn  wc-block-components-button wp-element-button-disabled" : "otpbtn  wc-block-components-button wp-element-button-able" }
          >
            <span class="wc-block-components-button__text">Receive OTP</span>
          </button>
        </div>
        </form>
      </div>
   
      {opterrmsg && (
        <form disabled={otpform} onSubmit={handlegetloyaypoints}>
          <div>
            <div className= {!verifyotpsusmsg || !otpform? "mobile-otp-container" :"mobile-otp-container-blur"}>
              <div className={`wc-block-components-text-input ${noopt ? 'has-error' : ''}`}>
                <label htmlFor="otp" id="otp-lable" className={otp || document.activeElement === document.getElementById('otp') ? 'focused' : ''}>
                  Enter otp
                </label>
                <input
               
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  disabled={otpform}
                  onBlur={handleotpInputBlur}
                  onClick={handleotpInputClick}
                />
              </div>
              <div className='otpcontainer'>
                <button type="submit" className={ otpform ? "wp-element-button-disabled otp-send-button" :"wp-element-button-able otp-send-button"}
 >
                  <span disabled={otpform} class="">Verify OTP</span>
                </button>
              </div>
            </div>
            {noopt && (
              <p style={{ paddingLeft: "100px" }} className= 'error-msg-outlineing wc-block-components-validation-error'>Please enter otp</p>
            )}
             <div className='otpbtncontianer-responsive' disabled={!ismobileNumber}>
          <button
            
            type='submit'
            // onClick={sendOtpRequest}
          class= { otpform ?  "otpbtn  wc-block-components-button wp-element-button-disabled" : "otpbtn  wc-block-components-button wp-element-button-able" }
          >
            <span class="wc-block-components-button__text">Verify OTP</span>
          </button>
        </div>
          </div>
        </form>
      )}

      {opterrmsg && (
        <p id="resendText" className='resendotptext' >
          Don't Receive an OTP on your mobile?{' '}
          <span className='resend-otp-text' onClick={handleResendClick}>Resend OTP</span>
        </p>
      )}

      {showCoupons && verifyotperrmsg && <Coupons rewardsData={rewardsData} tokensData={tokensData} />}
    </>
  );
};

export default SendOtp;
