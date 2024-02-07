import '../style.scss';
import { Button } from '@wordpress/components';
import { useState } from 'react';
export default function MyButton() {
    const [number,setNumber] = useState("87346723647")

    const onSubmit = async(e) =>{
        e.preventDefault();
        debugger
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label for="fname">Enter Number</label>
                <input type="number"  name="firstname" placeholder="Your Phone number.." value={number}/>

                <Button className='components-button wc-block-components-button wp-element-button submit-button' type='sumbit' >Click Me!</Button>
            </form>
        </>
    )
}