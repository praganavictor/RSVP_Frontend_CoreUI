import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Section = styled.section`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const Evento = styled.div`
  background-color: #eee;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.5em;
  padding: 25px;

  a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }

  h6 {
    font-size: 0.5em;
  }
`;
