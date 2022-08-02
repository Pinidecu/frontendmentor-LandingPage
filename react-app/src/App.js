import './App.css';
import Diferences from './components/Diferences/Diferences';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import OrangeBar from './components/OrangeBar/OrangeBar';
import Product from './components/Product/Product';
import Testimonios from './components/Testimonios/Testimonios';
import bg from "./images/bg-tablet-pattern.svg"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Product />
      <Diferences />
      <Testimonios/>
      <OrangeBar/>
      <Footer/>
      <img src={bg} alt='bgTop' className="bgTop"/>
      <img src={bg} alt='bgBottom' className="bgBottom"/>
    </div>
  );
}

export default App;
