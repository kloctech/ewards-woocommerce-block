import Sendotp from './otp-sender';
import { useEffect } from 'react';

export default function CouponsHandler() {
// useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       const confirmationMessage = 'Are you sure you want to reload?';
//       event.returnValue = confirmationMessage; 
//       return confirmationMessage; 
//     };
//     const confirmReload = () => {
//       if (window.confirm('Are you sure you want to reload?')) {
//         window.removeEventListener('beforeunload', handleBeforeUnload);
//         window.location.reload();
//       }
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
    
//   }, []); 
  
    return (
        <>
        <Sendotp/>
       
        </>
    )
}