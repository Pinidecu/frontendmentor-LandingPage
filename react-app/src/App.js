import './App.css';
import Diferences from './components/Diferences/Diferences';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import OrangeBar from './components/OrangeBar/OrangeBar';
import Product from './components/Product/Product';
import Testimonios from './components/Testimonios/Testimonios';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Product />
      <Diferences />
      <Testimonios/>
      <OrangeBar/>
      <Footer/>
    </div>
  );
}

export default App;
