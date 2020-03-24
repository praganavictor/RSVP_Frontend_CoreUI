import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// import api from "../../../../services/api";
import Canvas from "../../../../components/Canvas";

import { eventselectors } from "../../../../store/selectors/events";

import { Container, Header, ButtonShowHide } from "./styles";

export default function Index(props) {
  const [evento, setEvento] = useState({});
  const [participante, setParticipante] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const activeEvent = useSelector(eventselectors.ActiveEvent);

  async function searchParticipante() {
    const { id } = props.match.params;
    // const res = await api
    //   .get(`/eventos/${eventoId}/participantes/${id}`)
    //   .catch(error => {
    //     console.log(error);
    //   });
    const participante = activeEvent.participantes.filter(participante => {
      if (participante.CPF === id || participante._id === id || participante.nomeDoConvidado === id)
        return participante;
      else return null;
    });

    return participante[0];
  }

  useEffect(() => {
    searchParticipante().then(data => {
      if (data) {
        setParticipante(data);
        setEvento(data.evento);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Canvas isOpen={isOpen} onClose={e => setIsOpen(false)} participante={participante} />
      <Header />
      {participante.nomeDoConvidado ? (
        <table>
          <thead>
            <tr>
              <th>
                {evento.nome}
                <br />
                {evento.dataInicio}
              </th>
              <th />
              <th />
              <th />
              <th>Clique aqui para fazer o check-in:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{participante.nomeDoConvidado}</strong>
              </td>
              <td tdbg="#F00">{participante.emailDoConvidado}</td>
              <td>{participante.CPF}</td>
              <td>{participante.crmComEstadoEmissor}</td>
              <td>
                <ButtonShowHide
                  propcheckin={participante.assinatura ? true : false}
                  type="button"
                  onClick={() => setIsOpen(true)}
                >
                  CHECK-IN
                </ButtonShowHide>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <section>
          <h2>Não encontramos registros</h2>
        </section>
      )}
    </Container>
  );
}
