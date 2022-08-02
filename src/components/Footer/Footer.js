import './Footer.css';
import Logo from '../../images/logo-white.svg' 
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg' 
import { ReactComponent as Instagram } from '../../images/icon-instagram.svg' 
import { ReactComponent as Pinterest } from '../../images/icon-pinterest.svg' 
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg' 
import { ReactComponent as Youtube } from '../../images/icon-youtube.svg';
import  { useState } from 'react';

export default function Footer() {  
  const [input, setInput] = useState("")
  const [message, setMessage] = useState("")
  const handleInputChange = function(e){
    console.log(e.target.value)
    setInput(e.target.value)
    setMessage("")
  }
  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const sendForm = function(e){
    if(input===""){
    setMessage("Plese insert an email")
    }
    else if (emailRegex.test(input)) {
      setMessage("Email loaded");
      setTimeout(()=>{
        setMessage("");
        setInput("")
      }, 1000)
    } else {
      setMessage("Plese insert a valid email")
    }
  }
  return (
    <div className="FooterContainer">
      <div className="Footer">
        <p className='copyright2'>2Copyright 2020. All Rights Reserved</p>
        <div className="Images">
          <img src={Logo} alt='Logo' className="Logo"/>
          <div className="Iconos">
            <Facebook fill="white" className="Icono"/>
            <Youtube fill="white" className="Icono"/>
            <Twitter fill="white" className="Icono"/>
            <Pinterest fill="white" className="Icono"/>
            <Instagram fill="white" className="Icono"/>
          </div>
        </div>
        <div className="IndexContainer">
          <p className='index'>Home</p>
          <p className='index'>Careers</p>
          <p className='index'>Pricing</p>
          <p className='index'>Community</p>
          <p className='index'>About Us</p>
          <p className='index'>Privacy Policy</p>
          <p className='index'>Products</p>
        </div>
        <div className="RigthContainer">
          <div className="FormContainer">
            <div className='InputContainer'>
              <input type="text" placeholder='Updates in your inbox…' className={message === "Plese insert a valid email" ? "Error": null} value={input} onChange={(e)=> handleInputChange(e)}/>
              <p className={message==="Email loaded" ? "Correct": 'ErrorMessage'}>{message}</p>
            </div>
            <button onClick={(e)=> sendForm(e)}>Go</button>
          </div>
          
          <p className='copyright'>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

