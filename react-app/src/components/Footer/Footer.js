import './Footer.css';
import Logo from '../../images/logo.svg' 
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg' 
import { ReactComponent as Instagram } from '../../images/icon-instagram.svg' 
import { ReactComponent as Pinterest } from '../../images/icon-pinterest.svg' 
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg' 
import { ReactComponent as Youtube } from '../../images/icon-youtube.svg';

export default function Footer() {
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
          <div className="InputContainer">
            <input type="text" placeholder='Updates in your inbox…'/>
            <button>Go</button>
          </div>
          <p className='copyright'>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

