import styled from "styled-components";

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

export const Outside = styled.div`
  display: ${props => (props.propcanvas ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;

  width: 100%;
  height: 100vh;
  top: 0;
  background-color: grey;
  opacity: 0.2;
  z-index: 95;
`;

export const Container = styled.div`
  display: ${props => (props.propcanvas ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  top: 166px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 325px;
  max-height: 359px;
  opacity: 1;
  z-index: 99;

  header {
    width: 100%;
    background-color: #262626;
    color: #fff;
    display: flex;
    padding: 17px;
    justify-content: space-between;
    align-items: center;

    img {
      cursor: pointer;
    }
  }

  section {
    width: 100%;
    padding: 33px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: #c5c5c5;
    }
  }

  footer {
    width: 100%;
    background: #fff;
    padding: 40px 0;
    display: flex;
    justify-content: space-around;
  }
`;

export const Signature = styled.canvas`
  border-bottom: 1px solid #c5c5c5;
  width: 306px;
  height: 185px;
`;

export const Botao = styled.button`
  width: 50%;
  max-width: 146px;
  height: 42px;
  padding: 7px 22px;
  border-radius: 30px;
  border: 0;
  color: #fff;
  background-color: ${props => (props.bgcolor ? props.bgcolor : "#b1b1b1")};
  font-weight: 700;
  cursor: pointer;
`;
