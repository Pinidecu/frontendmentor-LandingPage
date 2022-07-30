import './Product.css';
import Ilustration from '../../images/illustration-intro.svg'

export default function Product() {

  let title = "Bring everyone together to build better products."
  let info = "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
  
  return (
    <div className="Products">
      <div className="InfoProducts">
        <h1>{title}</h1>
        <p>{info}</p>
        <div>
          <button>Get Started</button>
        </div>
      </div>
      <div className="StatsContainer">
        <img src={Ilustration} alt='Ilustration' className="Ilustration"/>
      </div>
    </div>
  );
}

