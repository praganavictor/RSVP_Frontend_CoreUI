import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 25px;

  span {
    width: 100%;
    border-bottom: 1px solid #000;
    padding: 5px 0;
    margin: 20px 0;
  }
`;

export const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;

    button {
      width: 157px;
      height: 45px;
      border-radius: 31px;
      border: 0;
      color: #fff;
      cursor: pointer;
    }

    button[type="submit"] {
      background: #0dae32;
    }

    button[type="button"] {
      background: #ff0000;
    }
  }

  input {
    border: 1px solid #d5d5d5;
    height: 50px;
    padding: 15px;
    margin-bottom: 10px;
    font-size: 16px;
  }

  textarea {
    height: 20vh;
    max-height: 173px;
    border: 1px solid #d5d5d5;
    padding: 15px;
    margin: 25px 0 25px 0;
    padding: 15px 0 0 15px;
    font-size: 16px;
  }

  section {
    display: flex;
    justify-content: center;

    button[type="button"] {
      width: 150px;
      height: 30px;
      border-radius: 30px;
      font-weight: 500;
      background: #0dae32;
      color: #fff;
      border: 0;
      font-size: 15px;
    }
  }
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    label {
      padding: 10px 13.5px;
    }

    section {
      display: flex;
      justify-content: space-between;
    }

    input {
      margin-top: 15px;
    }

    select {
      width: 97px;
      height: 50px;
      padding-left: 13.5px;
      border: 1px solid #d5d5d5;
      font-size: 13px;
      font-family: Montserrat;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: url("https://cdn3.iconfinder.com/data/icons/arrow-icons-4/512/BT_arrow_bottom-512.png")
        no-repeat 90%;
      background-color: #fff;
      background-size: 10px;
    }
  }
`;

export const Botoes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Botao = styled.button`
  background-color: ${props => (props.bgcolor ? props.bgcolor : "#b1b1b1")};
  width: 48%;
  max-width: 157px;
  height: 45px;
  border-radius: 31px;
  border: 0;
  color: #fff;
  font-family: Montserrat;
  cursor: pointer;
`;
