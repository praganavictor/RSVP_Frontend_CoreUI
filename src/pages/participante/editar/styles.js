import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  span {
    width: 100%;
    border-bottom: 1px solid #000;
    padding: 5px 0;
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input,
    textarea {
      width: 100%;
      background-color: #f1f3f4;
      margin-bottom: 14px;
      padding: 14px 17px;
      border: 1px solid #d5d5d5;
      border-radius: 4px;
      font: Bold 13px/16px Montserrat;
    }
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 37px;
  }

  p {
    padding: 12px 0;
  }
`;

export const Botao = styled.button`
  width: 157px;
  height: 45px;
  padding: 0.7em 1.5em;
  border-radius: 2em;
  border: 0;
  color: #fff;
  background-color: ${props => (props.bgcolor ? props.bgcolor : "#b1b1b1")};
  cursor: pointer;
  color: #fff;
`;
