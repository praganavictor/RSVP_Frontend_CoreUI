import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 86vh; */
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  padding: 21px 25px;
  margin-top: 21.45px;
  font-size: 13px;
  white-space: nowrap;

  p {
    font-size: 25px;
  }

  span {
    word-break: break-all;
    white-space: normal;
    padding-bottom: 10px;
  }

  label {
    padding-top: 8.5px;
  }

  section {
    display: flex;
    flex-direction: column;

    hr {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  aside {
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
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

  a {
    text-decoration: none;
    color: #fff;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: #fff;
  }
`;

export const BotaoImportar = styled.div`
  width: 48%;
  max-width: 157px;
  height: 45px;
  border: 0;
  color: #fff;
  font-family: Montserrat;
  cursor: pointer;

  label {
    width: 100%;
    height: 45px;
    border-radius: 31px;

    border: 0;
    color: #fff;
    background-color: #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }

  input {
    display: none;
  }
`;

export const ButtonShowHide = styled.button`
  height: 30px;
  padding: 7px;
  width: 9em;
  background-color: ${props => (props.propcheckin ? "#0DAE32" : "#E90F0F")};
  color: #fff;
  border: 0;
  border-radius: 31px;
  font-weight: 700;
  cursor: pointer;
`;

export const Participantes = styled.div`
  width: 100%;
  padding: 30px 25px;

  h3 {
    padding-top: 21px;
    padding-bottom: 5px;
  }

  section {
    padding-bottom: 16px;
  }
`;

export const Table = styled.div`
  display: flex;
  width: 100%;
  margin-top: 21.9px;
  margin-bottom: 16px;

  article {
    width: 25%;

    div {
      background-color: #262626;
      color: #fff;
      height: 40.5px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 15px;
    }
  }

  aside {
    width: 75%;

    div {
      height: 40.5px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 15px;
    }
  }
`;
