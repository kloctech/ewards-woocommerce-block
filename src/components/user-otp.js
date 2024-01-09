import '../style.scss';


import Sendotp from './send-otp';
import Coupons from './availblecoupns';
export default function MyButton() {

    const onSubmit = async(e) =>{
        e.preventDefault();
        debugger
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                {/* <label for="fname">Enter Number</label>
                <input type="number"  name="firstname" placeholder="Your Phone number.." value={number}/>

                <Button className='components-button wc-block-components-button wp-element-button submit-button' type='sumbit' >Click Me!</Button> */}
                <Sendotp/>
                <Coupons/>

            </form>
        </>
    )
}