import React, { Component } from "react";
import api from "../../../services/api";
import FormBusca from "../../../components/FormBusca";
import InputMask from "react-input-mask";

import {
  Container,
  FormParticipante,
  BotoesContainer,
  InputForm,
  DivInput
} from "./styles";

export default class criar extends Component {
  state = {
    CPF: "",
    celularComDDD: "",
    nomeDoConvidado: "",
    emailDoConvidado: "",
    crmComEstadoEmissor: "",
    nomeDePreferenciaParaOCracha: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      CPF: this.state.CPF.trim(),
      celularComDDD: this.state.celularComDDD.trim(),
      nomeDoConvidado: this.state.nomeDoConvidado.trim(),
      emailDoConvidado: this.state.emailDoConvidado.trim(),
      crmComEstadoEmissor: this.state.crmComEstadoEmissor.trim(),
      nomeDePreferenciaParaOCracha: this.state.nomeDePreferenciaParaOCracha.trim()
    };

    if (
      !data.CPF.length ||
      data.CPF.length !== 14 ||
      !data.celularComDDD.length ||
      data.celularComDDD.length !== 14 ||
      !data.nomeDoConvidado.length ||
      !data.emailDoConvidado.length ||
      !data.crmComEstadoEmissor.length ||
      !data.nomeDePreferenciaParaOCracha.length
    )
      return;

    api
      .post(`/eventos/${this.props.match.params.eventoId}/participantes`, data)
      .then(() =>
        this.props.history.push(`/evento/${this.props.match.params.eventoId}`)
      )
      .catch(err => console.error("erro ao enviar os dados" + err));
  };

  render() {
    return (
      <Container>
        <FormBusca />
        <FormParticipante onSubmit={this.handleSubmit}>
          <BotoesContainer>
            <button type="submit">SALVAR</button>
          </BotoesContainer>

          <InputForm
            type="text"
            placeholder="Nome completo"
            onChange={e => this.setState({ nomeDoConvidado: e.target.value })}
            required
          />

          <DivInput>
            <input
              type="text"
              placeholder="E-mail"
              onChange={e =>
                this.setState({ emailDoConvidado: e.target.value })
              }
              required
            />
            <InputMask
              type="text"
              placeholder="Telefone"
              mask="(99)99999-9999"
              onChange={e => this.setState({ celularComDDD: e.target.value })}
              required
            />
          </DivInput>
          <DivInput>
            <InputMask
              type="text"
              placeholder="CPF"
              mask="999.999.999-99"
              onChange={e => this.setState({ CPF: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Identificação"
              onChange={e =>
                this.setState({ crmComEstadoEmissor: e.target.value })
              }
              required
            />
          </DivInput>
          <InputForm
            type="text"
            placeholder="Nome de preferência para o crachá"
            onChange={e =>
              this.setState({ nomeDePreferenciaParaOCracha: e.target.value })
            }
            required
          />
        </FormParticipante>
      </Container>
    );
  }
}
