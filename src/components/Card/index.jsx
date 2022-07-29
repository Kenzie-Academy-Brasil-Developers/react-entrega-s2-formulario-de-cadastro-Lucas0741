import { useHistory, useParams } from "react-router-dom";
import "./style.css";
const Card = ({  setUser }) => {
  const history = useHistory()
  function limpar() {
    setUser({});
    history.push(`/`)
  }
  const { name } = useParams();

  return (
    <div>
      <h2>Bem-vindo, {name}</h2>
      <div>
        <figure>
          <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/582808117922031.Y3JvcCw2OTcsNTQ1LDUyOCwxMTI.jpg" alt="imagem usuário" />
        </figure>
        <button onClick={() => limpar()}>
          Voltar
        </button>
      </div>
    </div>
  );
};


export default Card;
