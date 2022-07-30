import './Footer.css';
import Logo from '../../images/logo.svg' 
import Facebook from '../../images/icon-facebook.svg' 
import Instagram from '../../images/icon-instagram.svg' 
import Pinterest from '../../images/icon-pinterest.svg' 
import Twitter from '../../images/icon-twitter.svg' 
import Youtube from '../../images/icon-youtube.svg' 
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Images">
        <img src={Logo} alt='Logo' className="Logo"/>
        <div className="Iconos">
          <img src={Facebook} alt='Facebook' className="Icono"/>
          <img src={Youtube} alt='Youtube' className="Icono"/>
          <img src={Twitter} alt='Twitter' className="Icono"/>
          <img src={Pinterest} alt='Icono' Pinterest="Icono"/>
          <img src={Instagram} alt='Instagram' className="Icono"/>
        </div>
      </div>
      <div className="IndexContainer">
        <p className='index'>Home</p>
        <p className='index'>Pricing</p>
        <p className='index'>Products</p>
        <p className='index'>About Us</p>
        <p className='index'>Careers</p>
        <p className='index'>Community</p>
        <p className='index'>Privacy Policy</p>
      </div>
      <div>
        <input type="text" placeholder='Updates in your inbox…'/>
        <button>Go</button>
        <p className='copyright'>Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  );
}

