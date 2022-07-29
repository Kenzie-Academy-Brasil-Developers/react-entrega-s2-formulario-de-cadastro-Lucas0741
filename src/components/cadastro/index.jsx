import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../App.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Cadastro = ({ setUser }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/,
        "Senha Ivalida"
      ),
    twopassword: yup
      .string()
      .required("Senha obrigatório")
      .oneOf([yup.ref("password"), null], "As Senhas são Diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    delete data.twopassword;
    setUser(data);
    history.push(`/${data.name}`);
  };

  return (
    <>
      <div className="container">
        <h2>Cadastre-se!</h2>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Nome" maxLength={18} {...register("name")} />
          {errors.name?.message}
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message}
          <input
            type="password"
            placeholder="Repetir Senha"
            {...register("twopassword")}
          />
          {errors.twopassword?.message}
          <div>
            <button type="submit">Enviar!</button>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default Cadastro;
