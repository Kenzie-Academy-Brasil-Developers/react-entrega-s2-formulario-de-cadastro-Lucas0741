import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ButtonForm } from "./styled";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Apenas caracteres obrigatório"
      )
      .required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
        "Sua senha deve ter de 8 à 15 dígitos, deve conter ao menos uma letra maiúscula e uma minúscula, um carácter especial e um número"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmar senha obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (item) => {
    history.push(`/sucess/${item.name}`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome" {...register("name")} />
        <p>*{errors.name?.message}</p>
        <input placeholder="E-mail" type="email" {...register("email")} />
        <p>*{errors.email?.message}</p>
        <input placeholder="Senha" {...register("password")} />
        <p>*{errors.password?.message}</p>
        <input placeholder="Confirmar senha" {...register("confirmPassword")} />
        <p>*{errors.confirmPassword?.message}</p>
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </form>
    </Container>
  );
};
export { Form };
