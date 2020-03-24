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
    justify-content: space-between;
    margin-bottom: 15px;

    button {
      border-radius: 31px;
      border: 0;
      color: #fff;
      font-family: Montserrat;
      cursor: pointer;
      width: 160px;
      height: 40px;
      margin-top: 10px;
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
    font-family: Montserrat;
  }

  textarea {
    border: 1px solid #d5d5d5;
    padding: 15px;
    font-size: 16px;
    margin-top: 10px;
    height: 18vh;
    font-family: Montserrat;
  }

  p {
    margin-top: 10px;
    color: #b1b1b1;
    margin-bottom: 15px;
    font-size: 14px;
  }

  section {
    display: flex;
    justify-content: center;

    button[type="button"] {
      width: 150px;
      height: 30px;
      border-radius: 30px;
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

  div {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    label {
      padding: 10px 13.5px;
    }

    section {
      display: flex;
      align-content: center;
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
