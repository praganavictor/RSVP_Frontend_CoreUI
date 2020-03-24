import styled from "styled-components";

export const LogoGrupoMM = styled.div`
  margin-top: 24px;
`;

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 1)
    ),
    url(${process.env.REACT_APP_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const DivBusca = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
`;

export const Title = styled.h1`
  font-size: 45px;
`;

export const FormBusca = styled.form`
  display: flex;
  width: 90%;
  margin-top: 35px;

  a,
  a:hover {
    text-decoration: none;
    width: 0;
  }
`;

export const InputText = styled.input`
  height: 50px;
  width: 100%;
  border: 0;
  border-radius: 50px;
  padding-left: 26px;
  box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.16);
`;

export const ButtonBuscar = styled.button`
  position: relative;
  font-family: Montserrat;
  font-weight: 500;
  height: 50px;
  width: 10em;
  left: -10em;
  border: 0;
  border-radius: 50px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 1em;
  }
`;
