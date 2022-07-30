import './Testimonio.css';


export default function Testimonio(props) {
  console.log(props)
  return (
    <div className="Testimonio">
      <img src={props.image} alt='Perfil' className="ImgPerfil"/>
      <h1>{props.name}</h1>
      <p>{props.said}</p>
    </div>
  );
}

