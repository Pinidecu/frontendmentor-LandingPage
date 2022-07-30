import './Diferences.css';
import Diference from './Diference/Diference';

export default function Diferences() {
  let title = "What’s different about Manage?"
  let info = "Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. "
  let enums = [{index:"01", title: "Track company-wide progress",info: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."},{index:"02", title: "Advanced built-in reports",info: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."}, {index:"03", title: "Everything you need in one place", info:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}]
  
  return (
    <div className="Diferences">
      <div className="InfoDiferences">
        <h1>{title}</h1>
        <p>{info}</p>
      </div>
      <div className="EnumDiferences">
        {enums.map(dif=>{
          return(            
        <Diference title={dif.title} info={dif.info} index={dif.index}/>
          )
        })}
      </div>
    </div>
  );
}

