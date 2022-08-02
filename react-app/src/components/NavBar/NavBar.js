import './NavBar.css';
import Logo from '../../images/logo.svg'  
import Hamburger from '../../images/icon-hamburger.svg'
import Close from '../../images/icon-close.svg'
import  { useState } from 'react';

export default function NavBar() {  
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="NavBarContainer">
      <div className="NavBar">
        <img src={Logo} alt='Logo' className="Logo"/>
        <div className="NavComponents">
          <p className="NavComponent">Pricing</p>
          <p className="NavComponent">Product</p>
          <p className="NavComponent">About Us</p>
          <p className="NavComponent">Careers</p>
          <p className="NavComponent">Community</p>
        </div>
        <button className="ButtonStartNav">Get Started</button>
        <button className={`${menuOpen? "Close": "Hamburger"}`}>
          <img src={Hamburger} onClick={()=> setMenuOpen(true)} alt='Hamburgger' className="Icono"/>
        </button>
        <button className={`${menuOpen? "Hamburger": "Close"}`}>
          <img src={Close} onClick={()=> setMenuOpen(false)} alt='Close' className="Icono"/>
        </button>
      </div>
      <div className={`${menuOpen ? "HamburgerMenu" : "MenuClose"}`}>
        <p className="NavComponent">Pricing</p>
        <p className="NavComponent">Product</p>
        <p className="NavComponent">About Us</p>
        <p className="NavComponent">Careers</p>
        <p className="NavComponent">Community</p>
      </div>
    </div>
  );
}

