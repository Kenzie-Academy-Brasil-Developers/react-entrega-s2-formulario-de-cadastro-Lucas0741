import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GreetingContainer, ButtonGreeting } from "./styled";

const Greeting = () => {
  const { id } = useParams();
  const history = useHistory();
  return (
    <GreetingContainer>
      <ButtonGreeting onClick={() => history.push("/")}>Voltar</ButtonGreeting>

      <div>
        <h2>Seja bem vindo {id}</h2>
      </div>
    </GreetingContainer>
  );
};
export { Greeting };
