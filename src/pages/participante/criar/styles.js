import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
`;

export const FormParticipante = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 35px;
  justify-content: space-between;
`;

export const DivInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  input {
    width: 49.5%;
    margin-bottom: 10px;
    border: 1px solid #d5d5d5;
    height: 50px;
    padding: 15px;
  }
`;

export const BotoesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;

  button {
    width: 90px;
    height: 31px;
    border-radius: 31px;
    border: 0;
    margin-left: 10px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
  button[type="submit"] {
    background: #262626;
  }
`;

export const InputForm = styled.input`
  width: ${props => (props.width ? props.width : "100%")};
  margin-bottom: 10px;
  border: 1px solid #d5d5d5;
  height: 50px;
  padding: 15px;
`;
