import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import searchIcon from "../../assets/SearchIcon.svg";
import { Container, Form } from "./styles";
import api from "../../services/api";

import { userselectors } from "../../store/selectors/user";
import { eventActions } from "../../store/actions/events";

export default function FormBusca() {
  const [busca, setBusca] = useState("");
  const user = useSelector(userselectors.getActiveUser);
  const dispatch = useDispatch();

  async function buscaEventos() {
    const res = await api.get("/eventos/").catch(err => console.error("err", err));
    dispatch(eventActions.SetEvents(res.data.eventos));
  }
  useEffect(() => {
    buscaEventos();
    // eslint-disable-next-line
  }, [busca]);

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(eventActions.toggleSearch(busca));
  }

  return (
    <>
      <Container>
        <span>{user.nome}</span>
        <Form onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={e => setBusca(e.target.value)}
            value={busca}
          />
          <div>
            <button type="submit" onClick={handlerSubmit}>
              <img src={searchIcon} alt="Search icon" />
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
}
