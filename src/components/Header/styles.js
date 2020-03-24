import styled from "styled-components";

export const MainHeader = styled.header`
  background-color: #262626;
  height: 7vh;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 15px;
  border: 0;
  font-weight: 700;

  label {
    width: 300px;
  }

  button {
    width: 130px;
    padding: 0.5em;
    border: 1px solid #fff;
    background: #262626;
    border-radius: 1em;
    color: #fff;
    cursor: pointer;
  }

  a,
  a:hover,
  a:visited {
    color: #fff;
    text-decoration: none;
  }
`;

export const GroupButton = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 20px;
  }
`;
