import React, { useState } from 'react';
import { Button, SelectControl, TextControl } from '@wordpress/components';
import axios from 'axios';
import CountryCodes1 from '../countires.json';

import Coupons from './availble-coupons';

const SendOtp = () => {
   const [mobile, setMobileNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [otpsucmsg, setotpsucmsg] = useState('');
  const [opterrmsg,setotperror] =  useState('')
  const [verifyotpsusmsg,setverifyotpsucmsg]= useState('')
  const [verifyotperrmsg,setverifyotperrmsg] =  useState('')
  const [isFrozen, setFrozen] = useState(false);
  const [otp, setOtp] = useState('');
  const [showCoupons, setShowCoupons] = useState(false); 
  const [error,setError] =useState('')

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
    if (value && value.length > 10) {
      setError('Mobile number must be 10 digits.');
    } else {
      setError('');
      setMobileNumber(value);
    }
  };
  

  const sendOtpRequest = () => {
    if (!isFrozen && selectedCountry && mobile) {
      const requestData = {
        mobile,
        country_code: selectedCountry,
      };

      axios.post('/sendotps', requestData)
        .then((response) => {
          console.log(response);
          setSuccessMessage(response.message);
          setError('');
          setotpsucmsg(response.message)
          
          setFrozen(true);
        })
        .catch((error) => {
          setFrozen(false);
          setotperror(error.message)
        });
    }
  };

  const verifyOtp = () => {
    if (otp && selectedCountry && mobile) {
      const requestData = {
        mobile,
        country_code: selectedCountry,
        otp: otp
      };

      axios.post('/verifyotp', requestData)
        .then((response) => {
          console.log(response);
          setverifyotpsucmsg(response.message)
          setverifyotperrmsg("")
          setShowCoupons(true); // Set showCoupons to true on successful verification
        })
        .catch((error) => {
          console.error(error);
          setverifyotperrmsg(error.message)
          setShowCoupons(true); // Ensure showCoupons is false on verification failure
          setverifyotpsucmsg("")
          console.log(error.message)
        });
    }
  };

  const handleOtpChange = (event) => {
    const value = event.target.value;

    setOtp(value);
  };

  const handleResendClick = () => {
    console.log('Resend OTP clicked');
  };
  console.log(selectedCountry)
  return (
    <>
      <div>       
      <div className='mobile-otp-container'>
      <div class="wc-block-components-text-input wc-block-components-totals-coupon__input selectcontrol">
           <input 
              type='text'
              value={selectedCountry}
              options={CountryCodes}
              onChange={handleCountryChange}
                // className='selectcontrol'
              disabled={isFrozen}/>    
         </div>
           <div class="wc-block-components-text-input wc-block-components-totals-coupon__input is-active">
           <input type="number"
            value={mobile}
            aria-label="Enter code"
            onChange={handleMobileNumberChange}
            disabled={isFrozen}/>            
            <label for="wc-block-components-totals-coupon__input-0">Phone Number</label></div>
            <button onClick={sendOtpRequest}  
            class="wc-block-components-button wp-element-button otp-send-button" ><span class="">Receive OTP</span>
            </button>
            </div>
            
          {error && <p class='wc-block-components-validation-error'>{error}</p>}
          {opterrmsg && <p class="wc-block-components-validation-error">{opterrmsg}</p>}
        {otpsucmsg && <p className="successmessage">{otpsucmsg}</p>}
         </div>

             {opterrmsg &&  (
              <div className='mobile-otp-container'>
             <div class="wc-block-components-text-input wc-block-components-totals-coupon__input is-active">
             <input type="text"
            value={otp}
            onChange={handleOtpChange}
            disabled={isFrozen}/>        
            <label for="wc-block-components-totals-coupon__input-0">Enter OTP</label></div>
            <button onClick={verifyOtp} class="wc-block-components-button wp-element-button otp-send-button">
              <span class="" >Verify OTP</span>
              </button>
            </div>
        
      )}
      {verifyotperrmsg && (
        <p className='resendotptext'>
          Don't Receive an OTP on your mobile?{' '}
          <span className ='resend-otp-text'onClick={handleResendClick}>Resend OTP</span>
        </p>
      )}

      {showCoupons && verifyotperrmsg &&  <Coupons rewardsData={rewardsData} tokensData={tokensData} />}
    </>
  );
};

export default SendOtp;