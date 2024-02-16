import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './verify-otp'
import '../styles/otp-sender/otp-sender.scss'
import Verifyotp from './verify-otp';
const Requestotp = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState("91");
  const [otpSuccessMessage,setOtpSuccessMessage] = useState("")
  const [otpErrorMessage,setOtpErrorMessage] = useState("")
  const [mobileOtpForm ,setMobileOtpForm] = useState(false)
  const [noMobileNumber,setNoMobileNumber] = useState(false)
  const handleCountryChange = (selectedValue) => {
    setSelectedCountry(selectedValue);
  };
  const handleMobileNumberChange = (event) => {
    const value = event.target.value;
   setNoMobileNumber(false);
    if (value && value.length > 11) {
     setOtpErrorMessage('Mobile number must be 10 digits.');
    } else {
      setOtpErrorMessage("")
      setMobileNumber(value);
    }
  };
  const handleInputClick = () => {
    document.getElementById('0-mobile-label').classList.add('focused');
  };
  const handleInputBlur = () => {
   setNoMobileNumber(!mobileNumber); // Set noMobileNumber to true if mobile is empty
  };
  const handlemobilenumberSubmit =async (event) => {  
     event.preventDefault()
    if (  mobileNumber.length !== 10) {
     setOtpErrorMessage('Mobile number must be exactly 10 digits.');
   setNoMobileNumber(false)
      return;
    } 
    else {
     setOtpErrorMessage('');
    }
    if (!mobileOtpForm && selectedCountry && mobileNumber) {
      const requestData = {
        mobile_number:mobileNumber,
        store_url:window.location.origin,
        country_code: selectedCountry,
      };
     await axios.post(`${PRDOUCTION_VAR.PRDOUCTION_URL}/api/ewards/customer-get-loyalty-info`, requestData)
        .then((response) => {
        setOtpSuccessMessage(response.data.otpResponse.response.message)
           setMobileOtpForm(true)
        })
        .catch((error) => {
           setOtpErrorMessage(error.response.data.resultMessage.en)
          setMobileOtpForm(false)
        });
      }
  };
  return (
    <>
      <div style={{display:'flex',flexDirection:'column',position:'relative'}}>
        <form onSubmit={handlemobilenumberSubmit} style={{display:'flex',flexDirection:"column",width:"100%",marginBottom:"10px"}}>
          <div className= {!otpSuccessMessage  ||  !mobileOtpForm ? "mobile-otp-container" :"mobile-otp-container-blur"}>
            <div class="wc-block-components-text-input  selectcontrol">
              <input
                type='text'
                value={selectedCountry}
                onChange={handleCountryChange}
                disabled={mobileOtpForm}
              />
            </div>
            <div className={`wc-block-components-text-input ${noMobileNumber ? 'has-error' : ''}`}>
             
              <input
                type="number"
                id="0-mobile"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                disabled={mobileOtpForm}
                onBlur={handleInputBlur}
                onClick={handleInputClick}
                autocapitalize="off" autocomplete="off" aria-label="Mobile Number" aria-invalid="false"
               
              />
                <label
                  htmlFor="0-mobile"
                  id="0-mobile-label"
                  className={`mobile-label ${mobileNumber || document.activeElement === document.getElementById('0-mobile') ? 'focused' : ''}`}
                >
                  Enter Mobile
                </label>
            </div>
            <div className='otpcontainer'>
              <button
                disabled={mobileOtpForm}
                 type="submit"
              className={ mobileOtpForm ? "button-element-disabled otp-send-button" :"button-element-able otp-send-button"}
              >
                <span class="wc-block-components-button__text">Receive OTP</span>
              </button>
            </div>
          </div>
          { noMobileNumber ? <p  className='error-msg-outlineing wc-block-components-validation-error'>Please enter mobile number</p> 
          :
          otpErrorMessage ? <p class="wc-block-components-validation-error error-msg-outlineing">{otpErrorMessage}</p> : <p className="wc-block-components-validation-success error-msg-outlineing">{otpSuccessMessage}</p>}
        
          {otpErrorMessage === "Customer not found." ? (
        <a href={`${window.location.origin}/my-account/`}>
          Don't have an account? Create one here.
        </a>
      ) : (
        ""
      )}  
        <div className='otpbtncontianer-responsive' disabled={!mobileOtpForm}>
          <button
            type='submit'
            // onClick={sendOtpRequest}
          class= { mobileOtpForm ?  "otpbtn  button-element-disabled" : "otpbtn  button-element-able" }
          >
            <span class="wc-block-components-button__text">Receive OTP</span>
          </button>
        </div>
        </form>
      </div>
    <Verifyotp mobileNumber={mobileNumber} otpSuccessMessage={otpSuccessMessage} selectedCountry = {selectedCountry} />
    </>
  );
};
export default Requestotp;
