import './OrangeBar.css';
import bg from "./../../images/bg-tablet-pattern.svg"

export default function OrangeBar() {
  return (
    <div className="OrangeBar">
      <div className= "Container">
        <div className="OrangeText">Simplify how your team works today.</div>
        <button className='buttonWhite'>Get Started</button>
      </div>
      <img src={bg} alt='bgTop' className="bgTopOrangeBar"/>
      <img src={bg} alt='bgBottom' className="bgBottomOrangeBar"/>
    </div>
  );
}

