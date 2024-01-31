import React, { useState } from 'react';
import axios from 'axios';
import CountryCodes1 from '../countires.json';

import Coupons from './available-coupons';

const SendOtp = () => {
  const [mobile, setMobileNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [otpsucmsg, setotpsucmsg] = useState('');
  const [opterrmsg, setotperror] = useState('');
  const [verifyotpsusmsg, setverifyotpsucmsg] = useState('');
  const [verifyotperrmsg, setverifyotperrmsg] = useState('');
  const [isFrozen, setFrozen] = useState(false);
  const [otp, setOtp] = useState('');
  const [showCoupons, setShowCoupons] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [noopt, setnoopt] = useState(false);
  const [otpform, setotpform] = useState(false);

  const rewardsData = [
    { title: "Coupon 1", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Coupon 2", date: "Valid: 12th June 2024", discount: "25% Off", id: "2" },
    { title: "Coupon 3", date: "Valid: 12th June 2024", discount: "25% Off", id: "3" },
    { title: "Coupon 4", date: "Valid: 12th June 2024", discount: "25% Off", id: "4" },
    { title: "Coupon 5", date: "Valid: 12th June 2024", discount: "25% Off", id: "5" },
  ];

  const tokensData = [
    { title: "Token 1", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Token 2", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Token 3", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Token 4", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
    { title: "Token 5", date: "Valid: 12th June 2024", discount: "25% Off", id: "1" },
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
      setMobileNumber(value);
    }
  };

  const sendOtpRequest = () => {
    if (   mobile.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    } 
    
    
    else {
      setError('');
    }
  
    if (!isFrozen && selectedCountry && mobile) {
      const requestData = {
        mobile,
        country_code: selectedCountry,
      };
  
      axios.post('/sendotps', requestData)
        .then((response) => {
          setSuccessMessage(response.message);
          setError('');
          setotpsucmsg(response.message);
          setFrozen(true);
        })
        .catch((error) => {
          setFrozen(true);
          setotperror(error.message);
        });
    }
  };
  

  const verifyOtp = () => {
    if (otp && selectedCountry && mobile) {
      const requestData = {
        mobile_number: mobile,
        country_code: selectedCountry,
        otp: otp,
        store_url: window.location.origin,
      };

      axios.post('http://localhost:3001/api/ewards/customer-loyalty-verify', requestData)
        .then((response) => {
         
          setverifyotpsucmsg(response.message);
          setverifyotperrmsg("");
          setotpform(true);
          setShowCoupons(true); // Set showCoupons to true on successful verification
        })
        .catch((error) => {
          console.error(error);
          setverifyotperrmsg(error.message);
          setShowCoupons(true); // Ensure showCoupons is false on verification failure
          setverifyotpsucmsg("");
          setotpform(true);
        });
    }
  };

  const handleOtpChange = (event) => {
    const value = event.target.value;
    setnoopt(false);
    setOtp(value);
  };

  const handleResendClick = () => {
   
    
    setotpform(false);
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

  const handlemobilenumberSubmit = (event) => {

    event.preventDefault()
  
  };

  const handlegetloyaypoints = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handlemobilenumberSubmit}>
          <div className='mobile-otp-container'>
            <div class="wc-block-components-text-input wc-block-components-totals-coupon__input selectcontrol">
              <input
                type='text'
                value={selectedCountry}
                options={CountryCodes}
                onChange={handleCountryChange}
                disabled={isFrozen}
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
                disabled={isFrozen}
                onBlur={handleInputBlur}
                onClick={handleInputClick}
              />
            </div>
            <div className='otpcontainer'>
              <button
                disabled={isFrozen}
                type="submit"
                onClick={sendOtpRequest}
               className="wp-element-button otp-send-button"
              >
                <span class="">Receive OTP</span>
              </button>
            </div>
          </div>
        </form>
        {isError && (
          <p style={{ paddingLeft: "100px", marginTop: "-10px" }} className='wc-block-components-validation-error'>Please enter mobile number</p>
        )}
        {error && <p style={{ paddingLeft: "100px", paddingBottom: "10px" }} className='wc-block-components-validation-error'>{error}</p>}
        {opterrmsg && <p class="wc-block-components-validation-error">{opterrmsg}</p>}
        {otpsucmsg && <p className="successmessage">{otpsucmsg}</p>}
        <div className='otpbtncontianer-responsive' disabled={!isFrozen}>
          <button
            
            type='submit'
            onClick={sendOtpRequest}
            // class="otpbtn components-button wc-block-components-button wp-element-button wc-block-cart__submit-button contained"
          >
            <span class="wc-block-components-button__text">Receive OTP</span>
          </button>
        </div>
      </div>

      {opterrmsg && (
        <form disabled={otpform} onSubmit={handlegetloyaypoints}>
          <div>
            <div className='mobile-otp-container'>
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
                <button type="submit" onClick={verifyOtp} class="wc-block-components-button wp-element-button otp-send-button" >
                  <span disabled={otpform} class="">Verify OTP</span>
                </button>
              </div>
            </div>
            {noopt && (
              <p style={{ paddingLeft: "100px" }} className='wc-block-components-validation-error'>Please enter otp</p>
            )}
            <div className='otpbtncontianer-responsive'>
              <a onClick={verifyOtp} className="verifyotpbtn components-button wc-block-components-button wp-element-button wc-block-cart__submit-button contained" disabled={otpform}>
                <span className="wc-block-components-button__text">Verify OTP</span>
              </a>
            </div>
          </div>
        </form>
      )}

      {verifyotperrmsg && (
        <p className='resendotptext'>
          Don't Receive an OTP on your mobile?{' '}
          <span className='resend-otp-text' onClick={handleResendClick}>Resend OTP</span>
        </p>
      )}

      {showCoupons && verifyotperrmsg && <Coupons rewardsData={rewardsData} tokensData={tokensData} />}
    </>
  );
};

export default SendOtp;
