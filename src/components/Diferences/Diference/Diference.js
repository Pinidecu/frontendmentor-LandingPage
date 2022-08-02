import './Diference.css';

export default function Diference(props) {

  return (
    <div className="Diference">
        <div className='index'>
          <button>{props.index}</button>
        </div>
        <h1>{props.title}</h1>
      <p>{props.info}</p>
    </div>
  );
}

