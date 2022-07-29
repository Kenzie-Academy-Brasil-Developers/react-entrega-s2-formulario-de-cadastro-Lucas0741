import { Link } from "react-router-dom";
import { SuccessPage } from "../Styles/styles";

export function Success({ registeredInfo }) {
  return (
    <SuccessPage>
      <h1>Registrado com successo, {registeredInfo.name}!</h1>
      <Link to="/">Voltar</Link>
    </SuccessPage>
  );
}