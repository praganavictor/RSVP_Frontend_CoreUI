import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import saveAs from "file-saver";

import api from "../../../services/api";

import arrowIcon from "../../../assets/arrow.svg";

import FormBusca from "../../../components/FormBusca";
import Canvas from "../../../components/Canvas";

import { eventActions } from "../../../store/actions/events";
import { partActions } from "../../../store/actions/participante";
import { navigationActions } from "../../../store/actions/navigation";

import { partselectors } from "../../../store/selectors/participante";

import { Container, Details, Botoes, Botao, BotaoImportar, Participantes, Table } from "./styles";

export default function Busca(props) {
  const [evento, setEvento] = useState({});
  const [participantes, setParticipantes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const activeParticipant = useSelector(partselectors.getActivePart);

  async function handleDelete(e) {
    e.preventDefault();
    await api
      .delete(`/eventos/${props.match.params.id}`)
      .then(props.history.push("/eventos"))
      .catch(err => console.error(err));
  }

  async function submitExcel(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("excel", e.target.files[0]);
    api
      .post(`/eventos/${props.match.params.id}/participantes/excel`, formData)
      .then(res => {
        window.location.reload();
      })
      .catch(error => console.log(error));
  }

  function exportarLista() {
    api.post("/criarpdf", participantes).then(() =>
      api.get("buscarpdf", { responseType: "blob" }).then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "participantes.pdf");
      })
    );
  }

  function handleActivePart(p) {
    dispatch(partActions.setActiveUser(p));
    setIsOpen(true);
  }

  useEffect(() => {
    async function buscaEvento() {
      await api
        .get(`/eventos/${props.match.params.id}`)
        .then(res => {
          setEvento(res.data.evento);
          setParticipantes(res.data.evento.participantes);
          // setUsuario(res.data.evento.usuario);
        })
        .catch(err => console.error(err));
    }

    buscaEvento();
  }, [props.match.params.id]);

  useEffect(() => {
    dispatch(eventActions.setActiveEvent(evento));
    dispatch(navigationActions.setSearch(true));
    dispatch(navigationActions.setLogout(true));
    dispatch(partActions.setActiveUser({}));

    return () => dispatch(navigationActions.setSearch(false));
  }, [dispatch, evento]);

  return (
    <Container>
      <Canvas isOpen={isOpen} onClose={e => setIsOpen(false)} participante={activeParticipant} />
      <FormBusca />
      <Details>
        <p>{evento.nome}</p>
        <label>
          <strong>Data: {evento.dataInicio}</strong>
        </label>
        <section>
          <hr />
          <label>
            <strong>participantes cadastrados: {evento.numParticipantes}</strong>
          </label>
          <label>
            <strong>participantes presentes: {evento.participantesConfirmados}</strong>
          </label>

          <label>
            <strong>Descrição:</strong>
          </label>
          <span>{evento.descricao}</span>
          <Botoes>
            <Botao type="button">
              <Link to={`/evento/${evento._id}/editar`}>EDITAR</Link>
            </Botao>
            <Botao bgcolor={"#FF0000"} type="submit" onClick={handleDelete}>
              EXCLUIR
            </Botao>
          </Botoes>

          <aside>
            <img src={arrowIcon} alt="Arrow icon" />
          </aside>
        </section>
      </Details>

      <Participantes>
        <Botoes>
          <BotaoImportar>
            <label htmlFor="input-file">IMPORTAR</label>
            <input id="input-file" type="file" onChange={submitExcel} />
          </BotaoImportar>
          <Botao bgcolor={"#262626"} type="button" onClick={exportarLista}>
            EXPORTAR
          </Botao>
        </Botoes>
        <h3>PARTICIPANTES</h3>
        {participantes.map(participante => (
          <section key={participante._id}>
            <hr />
            <Table>
              <article>
                <div>Nome</div>
                <div>Email</div>
                <div>CPF</div>
                <div>ID</div>
              </article>
              <aside>
                <div>{participante.nomeDoConvidado}</div>
                <div>{participante.emailDoConvidado}</div>
                <div>{participante.CPF}</div>
                <div>{participante.crmComEstadoEmissor}</div>
              </aside>
            </Table>
            <Botoes>
              <Botao
                bgcolor={participante.assinatura ? "#0DAE32" : "#E90F0F"}
                type="button"
                onClick={() => handleActivePart(participante)}
              >
                CHECK-IN
              </Botao>
              <Botao type="button">
                <Link to={`/evento/${evento._id}/participante/${participante._id}/editar`}>
                  EDITAR
                </Link>
              </Botao>
            </Botoes>
          </section>
        ))}
      </Participantes>
    </Container>
  );
}
