import './home.css';

const ElementoLista = (props) => {
    const {
        numero
    } = props;
    return (
        <li>
            {`Componente #${numero}`}
        </li>
    )
}

export const Home = () => {
    const nombre = "alex";
    const value = true;
    const numeros = [1,2,3,4,5];
  return (
    <div className="home">
      {`Hola ${nombre}`}
      {value &&
        <div>Estas logeado</div>
      }
      {!value &&
        <div>NO Estas logeado</div>
      }
      <ul>
          {numeros.map((numero, indice) => 
            <ElementoLista numero={numero} key={indice}/>
          )}
          
      </ul>
    </div>
  );
}
