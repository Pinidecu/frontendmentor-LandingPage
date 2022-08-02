import './Testimonios.css';
import Testimonio from './Testimonio/Testimonio';
import avatarAli from '../../images/avatar-anisha.png' 
import avatarAnisha from '../../images/avatar-ali.png' 
import avatarRichard from '../../images/avatar-richard.png' 
import avatarShanai from '../../images/avatar-shanai.png'
import  { useState } from 'react';

export default function Testimonios() {
  const [imgSelected, setImgSelected] = useState(1)
  let title = "What they’ve said"
  let tests = [{index:1, name: "Anisha Li",said: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”", image:avatarAli},{index:2, name: "Ali Bravo",said: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”", image:avatarAnisha}, {index:3, name: "Richard Watts", said:"“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”", image:avatarRichard}, {index:4, name: "Shanai Gough", said:"“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”", image:avatarShanai}]
  var ancho = window.innerWidth;
  const selectImg = function (index){
    setImgSelected(index)
    document.getElementById('EnumTests').scrollLeft = (index-1)*(ancho);
  }
  return (
    <div className="Testimonios">
      <div className="InfoTestimonios">
        <h1>{title}</h1>
      </div>
      <div id="EnumTests">
        {tests.map((test,i)=>{
          return(            
            <Testimonio name={test.name} said={test.said} index={test.index} image={test.image}  key={i}/>
          )
        })}
      </div>
      <div className="ImgSelectContainer">
        {tests.map((test,i)=>{
            return(            
              <button className={`ImgSelect ${imgSelected === test.index ? "Selected" : null} `} onClick={()=> selectImg(test.index)} key={i}></button>
            )
          })}
      </div>
      <div className='StartButton'>
        <button>Get Started</button>
      </div>
    </div>
  );
}

