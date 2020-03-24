import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: 0;
    background-color: #eee;
    padding-left: 26px;
  }
  div {
    width: 0;
  }

  button {
    position: relative;
    height: 50px;
    width: 50px;
    left: -50px;
    border: 0;
    border-radius: 50px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
