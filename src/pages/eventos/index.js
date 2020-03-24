import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import api from "../../services/api";
import FormBusca from "../../components/FormBusca";

import { eventActions } from "../../store/actions/events";
import { navigationActions } from "../../store/actions/navigation";
import { eventselectors } from "../../store/selectors/events";

import { Container, Section, Evento } from "./styles";

export default function Eventos() {
  const [response, setResponse] = useState({});
  const dispatch = useDispatch();
  const allEventos = useSelector(eventselectors.AllEvents);

  useEffect(() => {
    dispatch(navigationActions.setLogout(true));
    dispatch(eventActions.setActiveEvent({}));

    async function buscaEventos() {
      const res = await api.get("/eventos/").catch(err => console.error("err", err));
      setResponse(res);
      dispatch(eventActions.SetEvents(res.data.eventos));
    }

    buscaEventos();
    // eslint-disable-next-line
    return () => dispatch(navigationActions.setGoBack(true));
  }, [dispatch]);

  function redirecionar() {
    return <Redirect to="/sair" />;
  }

  return (
    <Container>
      {!response ? redirecionar() : null}
      <FormBusca />
      <Section>
        {allEventos &&
          allEventos.map(evento => (
            <Evento key={evento._id}>
              <Link to={`evento/${evento._id}`}>
                <p>{evento.nome}</p>
                <h6>Data: {evento.dataInicio}</h6>
              </Link>
            </Evento>
          ))}
      </Section>
    </Container>
  );
}
