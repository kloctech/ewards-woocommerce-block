import React, { useState } from 'react';
import { Button, SelectControl, TextControl } from '@wordpress/components';
import axios from 'axios';
import CountryCodes1 from '../countires.json';

import Coupons from './Availblecoupns';

const SendOtp = () => {
  const [mobile, setMobileNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isFrozen, setFrozen] = useState(false);
  const [otp, setOtp] = useState('');
  const [showCoupons, setShowCoupons] = useState(false); // New state

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

  const handleMobileNumberChange = (value) => {
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
          setFrozen(true);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
          setSuccessMessage('');
          setFrozen(false);
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
          setSuccessMessage(response.message);
          setError('');
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
          setSuccessMessage('');
          setShowCoupons(true); // Set showCoupons to true on successful verification

        });
    }
  };

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleResendClick = () => {
    console.log('Resend OTP clicked');
  };

  return (
    <>
      <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <SelectControl
    value={selectedCountry}
    options={CountryCodes}
    onChange={handleCountryChange}
    style={{ width: '70%', marginBottom: '10px', marginLeft: '20px',height:'25px' }}
    disabled={isFrozen}
  />

          <TextControl
            type="number"
            placeholder="Enter your phone number"
            value={mobile}
            onChange={handleMobileNumberChange}
            disabled={isFrozen}
            className='inputfield'
          />
    <Button className='otpbutton' onClick={sendOtpRequest} disabled={isFrozen}>
            Receive OTP
          </Button>
          
        </div>
        
        {error && <p className="errormessage">{error}</p>}
        {successMessage && <p className="successmessage">{successMessage}</p>}
      </div>

      {error && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextControl
            type='text'           
            className='optinputfield'
            value={otp}
            onChange={handleOtpChange}
          />
          <Button className="otpbutton" onClick={verifyOtp} disabled={isFrozen}>
            Verify OTP
          </Button>
        </div>
      )}

      {error && (
        <p className='resendotptext'>
          Don't Receive an OTP on your mobile?{' '}
          <span onClick={handleResendClick}>Resend OTP</span>
        </p>
      )}

      {showCoupons && error && <Coupons rewardsData={rewardsData} tokensData={tokensData} />}
    </>
  );
};

export default SendOtp;
