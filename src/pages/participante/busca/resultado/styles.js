import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  background: #f1f1f1;
`;

export const Container = styled.div`
  width: 100%;
  height: 80vh;

  section {
    width: 100%;
    height: 100%;
    padding-top: 25px;
    display: flex;
    justify-content: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 25px 33px;
      height: 45px;
      text-align: left;
      border-bottom: 1px solid #c5c5c5;
      background: ${props => props.tdbg};
    }
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
