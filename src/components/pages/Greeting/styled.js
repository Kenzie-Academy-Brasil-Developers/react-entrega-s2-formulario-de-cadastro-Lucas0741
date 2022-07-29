import styled from "styled-components";
import { ButtonForm } from "../../Form/styled";

export const GreetingContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 80%;
  max-width: 100%;
  div {
    width: 600px;
    margin: 15px;
  }
  h2 {
    font-size: 40px;
    margin: 0;
  }

  @media (max-width: 620px) {
    div {
      width: 450px;
    }
  }
  @media (max-width: 460px) {
    div {
      width: 350px;
    }
  }
  @media (max-width: 350px) {
    div {
      width: 280px;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 280px) {
    position: fixed;
  }
`;

export const ButtonGreeting = styled(ButtonForm)`
  width: 150px;
  margin-bottom: 12px;
`;
