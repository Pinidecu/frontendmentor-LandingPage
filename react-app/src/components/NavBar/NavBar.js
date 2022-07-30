import './NavBar.css';
import Logo from '../../images/logo.svg' 
export default function NavBar() {
  return (
    <div className="NavBar">
      <img src={Logo} alt='Logo' className="Logo"/>
      <div className="NavComponents">
        <p className="NavComponent">Pricing</p>
        <p className="NavComponent">Product</p>
        <p className="NavComponent">About Us</p>
        <p className="NavComponent">Careers</p>
        <p className="NavComponent">Community</p>
      </div>
      <button>Get Started</button>
    </div>
  );
}

