import { FormContainer } from "../Styles/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


export function Register({ setRegisteredInfo }) {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome e um campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras do alfabeto permitidas"),
    email: yup
      .string()
      .required("E-mail é um campo obrigatório")
      .email("Insira um e-mail válido"),
    password: yup
      .string()
      .required("Senha é um campo obrigatorio")
      .test(
        "len",
        "Deve haver pelo menos 8 caracteres",
        (val) => val.length >= 8
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não coincidem")
      .required("Confirmação de senha é um campo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (info) => {
    navigate("/registered");
    setRegisteredInfo(info);
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <label>Digite seu nome:</label>
      <input placeholder="Nome" type="text" {...register("name")} />
      <p>{errors.name?.message}</p>
      <p>Digite seu E-mail:</p>
      <input placeholder="E-mail" type="email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <label>Digite sua senha:</label>
      <input placeholder="Senha" type="password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <label>Confirme sua senha:</label>
      <input
        placeholder="Confirme a senha"
        type="password"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <button type="submit">Registrar</button>
    </FormContainer>
  );
}