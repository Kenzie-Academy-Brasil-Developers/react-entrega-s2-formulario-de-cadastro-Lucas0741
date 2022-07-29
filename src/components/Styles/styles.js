import styled from "styled-components";

export const Application = styled.div`
  min-height: 100vh;
  background-color: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: min-content;

  label{
    font-size: 15px;
    padding-bottom: 5px;
    background-color:white;
  }
  p {
    color: red;
    font-size: 12px;
  }
`;

export const SuccessPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: forestgreen;
  color: white;
  flex-direction: column;
  h1 {
    margin: 8px;
    text-align: center;
  }
  a {
    color: white;
    font-weight: 700;
  }
`;