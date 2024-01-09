import React, { useState } from 'react';
import { Button, SelectControl, TextControl } from '@wordpress/components';
import axios from 'axios';
import CountryCodes1 from '../countires.json';

const SendOtp = () => {
  const [mobile, setMobileNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isFrozen, setFrozen] = useState(false);
  const [otp,setOtp] =  useState('')

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
          setFrozen(true)
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
          setSuccessMessage('');
          setFrozen(false)
        })
      
    }
  };
  const verifyOtp = ()=>{
    if (otp&& selectedCountry && mobile) {
      const requestData = {
        mobile,
        country_code: selectedCountry,
        otp:otp
      };
console.log(requestData)
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
        })
      
    }
  }
  const handleOtpChange = (value) => {
    setOtp(value);
  };
  const handleResendClick = () => {
    console.log('Resend OTP clicked');
  };
  console.log(otp)
  return (
    <>

    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SelectControl
          value={selectedCountry}
          options={CountryCodes}
          onChange={handleCountryChange}
          style={{ width: '100%', marginBottom: '10px' }}
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

        <Button className="otpbutton" onClick={sendOtpRequest} disabled={isFrozen}>
          Receive OTP
        </Button>
      </div>
      {error && <p className="errormessage">{error}</p>}
      {successMessage && <p className="successmessage">{successMessage}</p>}
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextControl type='text'           
    className='optinputfield'
    value={otp}
    onChange={ handleOtpChange}
   
    >
    </TextControl>
    <Button className="otpbutton" onClick={verifyOtp} disabled={isFrozen}>
          Verify OTP
    </Button>
    </div>
    <p>
        Don't Receive an OTP on your mobile?{' '}
        <span onClick={verifyOtp}>Resend OTP</span>
      </p>  
      
    </>
  );
};

export default SendOtp;
