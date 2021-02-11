import React from 'react';
import logoFooter from '../images/Footer.svg'

function Footer(){
    return (
        <div className='footer'>
            <p>React project by Mayte Valdez, Student of Wild Code School.</p>
            <p>Information source Open Food Facts API</p>
            <img src={logoFooter} alt="logo"/>
        </div>
    )
        
}
export default Footer;