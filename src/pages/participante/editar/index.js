import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import api from "../../../services/api";
import { userselectors } from "../../../store/selectors/user";

import { Container, Botao } from "./styles";

export default function Editar(props) {
  const [participante, setParticipante] = useState({
    participante: {
      nomeDoConvidado: "",
      emailDoConvidado: "",
      enderecoDoConvidado: "",
      cidadeDoConvidado: "",
      estadoDoConvidado: "",
      paisDoConvidado: "",
      gdDoConvidado: "",
      grupoDepatrocinio: "",
      convite: "",
      termos: "",
      nomeDeQuemAceitouOuRejeitouOConvite: "",
      emailDeQuemAceitouOuRejeitouOConvite: "",
      inscricao: "",
      hospedagem: "",
      transfers: "",
      aereo: "",
      voucher: "",
      tipoDeAcomodacao: "",
      classeDeVoo: "",
      prazoParaParticipacao: "",
      hotelSelecionado: "",
      transfersSelecionado: "",
      dadosDaInscricao: "",
      ultimoHistoricoDeRelacionamento: "",
      eticket: "",
      reserva: "",
      vooDeidaCodigo: "",
      vooDeidaOrigem: "",
      vooDeidaDestino: "",
      vooDeidaDataDeSaida: "",
      vooDeidaHoraDeSaida: "",
      vooDeidaDataDeChegada: "",
      vooDeidaHoraDeChegada: "",
      vooDeVoltaCodigo: "",
      vooDeVoltaOrigem: "",
      vooDeVoltaDestino: "",
      vooDeVoltaDataDeSaida: "",
      vooDeVoltaHoraDeSaida: "",
      vooDeVoltaDataDeChegada: "",
      vooDeVoltaHoraDeChegada: "",
      nomeDoHotel: "",
      dataDoCheckinDoHotel: "",
      dataDoCheckoutDoHotel: "",
      nomeCompletoConformeConstaNoRG: "",
      enviouACopiaDoPassaporte: "",
      obsAouCRSVP: "",
      demaisObservacoes: "",
      observacoesDeTransferExtra: "",
      observacoesDeTransferAouHouA: "",
      observacoesDeAereo: "",
      observacoesDeHospedagem: "",
      hotelDeHospedagem: "",
      observacoesDeInscricaoOuParticipacao: "",
      observacoesDePatrocinio: "",
      AlteracoesDePatrocinio: "",
      observacoesCliente: "",
      emailDoRepresentante: "",
      representante: "",
      notificacaoRecebida: "",
      cep: "",
      bairro: "",
      complemento: "",
      possuiAlgumProblemaDeMobilidade: "",
      possuiAlgumaRestricaoAlimentar: "",
      instituicaoNaQualTrabalha: "",
      especialidade: "",
      foneFixoDePreferenciaComercialComDDD: "",
      celularComDDD: "",
      orgaoEmissorDoRG: "",
      RG: "",
      CPF: "",
      dataDeNascimento: "",
      nomeDePreferenciaParaOCracha: "",
      RecebimentoDaCartaVoucher: "",
      observacoesdecontato: "",
      dataDaInclusaoDoConvidado: "",
      atendimentoRSVP: "",
      crmComEstadoEmissor: ""
    }
  });

  const user = useSelector(userselectors.getActiveUser);

  async function handleDelete(e) {
    e.preventDefault();
    await api
      .delete(`/eventos/${props.match.params.eventoId}/participantes/${props.match.params.id}`)
      .then(props.history.push(`/evento/${props.match.params.eventoId}`))
      .catch(err => console.error(err));
  }

  async function handleSubmit() {
    api
      .put(
        `/eventos/${props.match.params.eventoId}/participantes/${props.match.params.id}`,
        participante
      )
      .then(props.history.push(`/evento/${props.match.params.eventoId}`))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    async function buscaParticipante() {
      await api
        .get(`/eventos/${props.match.params.eventoId}/participantes/${props.match.params.id}`)
        .then(res => {
          setParticipante({ ...participante, ...res.data });
        })
        .catch(err => console.error(err));
    }

    buscaParticipante();
  }, [props, participante]);

  return (
    <Container>
      <span>{user.nome}</span>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={participante.nomeDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                nomeDoConvidado: e.target.value
              })
            }
          />
          <input
            type="text"
            value={participante.emailDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                emailDoConvidado: e.target.value
              })
            }
          />
          <input
            type="text"
            value={participante.celularComDDD}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                celularComDDD: e.target.value
              })
            }
          />
          <input
            type="text"
            value={participante.CPF}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                CPF: e.target.value
              })
            }
          />
          <input
            type="text"
            value={participante.crmComEstadoEmissor}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                crmComEstadoEmissor: e.target.value
              })
            }
          />
          <input
            type="text"
            value={participante.nomeDePreferenciaParaOCracha}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                nomeDePreferenciaParaOCracha: e.target.value
              })
            }
          />
          <section>
            <Botao bgcolor={"#0DAE32"} type="submit">
              SALVAR
            </Botao>
            <Botao bgcolor={"#FF0000"} type="button" onClick={handleDelete}>
              EXCLUIR
            </Botao>
          </section>
          <strong>Dados adicionais</strong>
          <p>Endereço</p>
          <input
            type="text"
            value={participante.enderecoDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                enderecoDoConvidado: e.target.value
              })
            }
          />
          <p>Cidade do convidado</p>
          <input
            type="text"
            value={participante.cidadeDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                cidadeDoConvidado: e.target.value
              })
            }
          />

          <p>Estado do convidado</p>
          <input
            type="text"
            value={participante.estadoDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                estadoDoConvidado: e.target.value
              })
            }
          />

          <p>País do convidado</p>
          <input
            type="text"
            value={participante.paisDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                paisDoConvidado: e.target.value
              })
            }
          />

          <p>GD do convidado</p>
          <input
            type="text"
            value={participante.gdDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                gdDoConvidado: e.target.value
              })
            }
          />

          <p>Grupo de Patrocínio</p>
          <input
            type="text"
            value={participante.grupoDepatrocinio}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                grupoDepatrocinio: e.target.value
              })
            }
          />

          <p>Convite</p>
          <input
            type="text"
            value={participante.convite}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                convite: e.target.value
              })
            }
          />

          <p>Termos</p>
          <input
            type="text"
            value={participante.termos}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                termos: e.target.value
              })
            }
          />

          <p>Nome de quem aceitou/rejeitou o convite</p>
          <input
            type="text"
            value={participante.nomeDeQuemAceitouOuRejeitouOConvite}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                nomeDeQuemAceitouOuRejeitouOConvite: e.target.value
              })
            }
          />

          <p>E-mail de quem aceitou/rejeitou o convite</p>
          <input
            type="text"
            value={participante.emailDeQuemAceitouOuRejeitouOConvite}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                emailDeQuemAceitouOuRejeitouOConvite: e.target.value
              })
            }
          />

          <p>Inscrição</p>
          <input
            type="text"
            value={participante.inscricao}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                inscricao: e.target.value
              })
            }
          />

          <p>Hospedagem</p>
          <input
            type="text"
            value={participante.hospedagem}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                hospedagem: e.target.value
              })
            }
          />

          <p>Transfers</p>
          <input
            type="text"
            value={participante.transfers}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                transfers: e.target.value
              })
            }
          />

          <p>Aéreo</p>
          <input
            type="text"
            value={participante.aereo}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                aereo: e.target.value
              })
            }
          />

          <p>Voucher</p>
          <input
            type="text"
            value={participante.voucher}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                voucher: e.target.value
              })
            }
          />

          <p>Tipo de acomodação</p>
          <input
            type="text"
            value={participante.tipoDeAcomodacao}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                tipoDeAcomodacao: e.target.value
              })
            }
          />

          <p>Classe de vôo</p>
          <input
            type="text"
            value={participante.classeDeVoo}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                classeDeVoo: e.target.value
              })
            }
          />

          <p>Prazo para participação</p>
          <input
            type="text"
            value={participante.prazoParaParticipacao}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                prazoParaParticipacao: e.target.value
              })
            }
          />

          <p>Vôo de Ida - Código</p>
          <input
            type="text"
            value={participante.vooDeidaCodigo}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeidaCodigo: e.target.value
              })
            }
          />

          <p>Vôo de Ida - Origem</p>
          <input
            type="text"
            value={participante.vooDeidaOrigem}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeidaOrigem: e.target.valueq
              })
            }
          />

          <p>Vôo de Ida - Destino</p>
          <input
            type="text"
            value={participante.vooDeidaDestino}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeidaDestino: e.target.value
              })
            }
          />

          <p>Vôo de Ida - Data de saída</p>
          <input
            type="text"
            value={participante.vooDeidaDataDeSaida}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeidaDataDeSaida: e.target.value
              })
            }
          />

          <p>Vôo de Ida - Hora de saída</p>
          <input
            type="text"
            value={participante.vooDeidaHoraDeSaida}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeidaHoraDeSaida: e.target.value
              })
            }
          />

          <p>Vôo de Ida - Data de chegada</p>
          <input
            type="text"
            value={participante.vooDeidaDataDeChegada}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeidaDataDeChegada: e.target.value
              })
            }
          />

          <p>Vôo de Ida - Hora de chegada</p>
          <input
            type="text"
            value={participante.vooDeidaHoraDeChegada}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeidaHoraDeChegada: e.target.value
              })
            }
          />

          <p>Vôo de Volta - Código</p>
          <input
            type="text"
            value={participante.vooDeVoltaCodigo}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeVoltaCodigo: e.target.value
              })
            }
          />

          <p>Vôo de Volta - Origem</p>
          <input
            type="text"
            value={participante.vooDeVoltaOrigem}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeVoltaOrigem: e.target.value
              })
            }
          />

          <p>Vôo de Volta - Destino</p>
          <input
            type="text"
            value={participante.vooDeVoltaDestino}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeVoltaDestino: e.target.value
              })
            }
          />

          <p>Vôo de Volta - Data de saída</p>
          <input
            type="text"
            value={participante.vooDeVoltaDataDeSaida}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeVoltaDataDeSaida: e.target.value
              })
            }
          />

          <p>Vôo de Volta - Hora de saída</p>
          <input
            type="text"
            value={participante.vooDeVoltaHoraDeSaida}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeVoltaHoraDeSaida: e.target.value
              })
            }
          />

          <p>Vôo de Volta - Data de chegada</p>
          <input
            type="text"
            value={participante.vooDeVoltaDataDeChegada}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeVoltaDataDeChegada: e.target.value
              })
            }
          />

          <p>Vôo de Volta - Hora de chegada</p>
          <input
            type="text"
            value={participante.vooDeVoltaHoraDeChegada}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                vooDeVoltaHoraDeChegada: e.target.value
              })
            }
          />

          <p>Nome do hotel</p>
          <input
            type="text"
            value={participante.nomeDoHotel}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                nomeDoHotel: e.target.value
              })
            }
          />
          <p>Data do check-in do hotel</p>
          <input
            type="text"
            value={participante.dataDoCheckinDoHotel}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                dataDoCheckinDoHotel: e.target.value
              })
            }
          />

          <p>Data do check-out do hotel</p>
          <input
            type="text"
            value={participante.dataDoCheckoutDoHotel}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                dataDoCheckoutDoHotel: e.target.value
              })
            }
          />

          <p>Nome completo conforme consta no RG</p>
          <input
            type="text"
            value={participante.nomeCompletoConformeConstaNoRG}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                nomeCompletoConformeConstaNoRG: e.target.value
              })
            }
          />

          <p>ENVIOU A CÓPIA DO PASSAPORTE (SIM ou NÃO)?</p>
          <input
            type="text"
            value={participante.enviouACopiaDoPassaporte}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                enviouACopiaDoPassaporte: e.target.value
              })
            }
          />

          <p>OBS A/C RSVP</p>
          <input
            type="text"
            value={participante.obsAouCRSVP}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                obsAouCRSVP: e.target.value
              })
            }
          />

          <p>DEMAIS OBSERVAÇÕES</p>
          <input
            type="text"
            value={participante.demaisObservacoes}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                demaisObservacoes: e.target.value
              })
            }
          />

          <p>NOTIFICAÇÃO RECEBIDA</p>
          <input
            type="text"
            value={participante.notificacaoRecebida}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                notificacaoRecebida: e.target.value
              })
            }
          />

          <p>CEP</p>
          <input
            type="text"
            value={participante.cep}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                cep: e.target.value
              })
            }
          />
          <p>Bairro</p>
          <input
            type="text"
            value={participante.bairro}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                bairro: e.target.value
              })
            }
          />

          <p>Complemento</p>
          <input
            type="text"
            value={participante.complemento}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                complemento: e.target.value
              })
            }
          />

          <p>Possui algum problema de mobilidade?</p>
          <input
            type="text"
            value={participante.possuiAlgumProblemaDeMobilidade}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                possuiAlgumProblemaDeMobilidade: e.target.value
              })
            }
          />

          <p>Em caso afirmativo, favor especificar</p>
          <input
            type="text"
            value={participante.possuiAlgumProblemaDeMobilidadeAfirmar}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                possuiAlgumProblemaDeMobilidadeAfirmar: e.target.value
              })
            }
          />

          <p>Possui alguma restrição alimentar?</p>
          <input
            type="text"
            value={participante.possuiAlgumaRestricaoAlimentar}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                possuiAlgumaRestricaoAlimentar: e.target.value
              })
            }
          />

          <p>Em caso afirmativo, favor especificar</p>
          <input
            type="text"
            value={participante.possuiAlgumaRestricaoAlimentarAfirmar}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                possuiAlgumaRestricaoAlimentarAfirmar: e.target.value
              })
            }
          />

          <p>Instituição na qual trabalha</p>
          <input
            type="text"
            value={participante.instituicaoNaQualTrabalha}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                instituicaoNaQualTrabalha: e.target.value
              })
            }
          />

          <p>Especialidade</p>
          <input
            type="text"
            value={participante.especialidade}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                especialidade: e.target.value
              })
            }
          />

          <p>Fone fixo - de preferência comercial - com DDD</p>
          <input
            type="text"
            value={participante.foneFixoDePreferenciaComercialComDDD}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                foneFixoDePreferenciaComercialComDDD: e.target.value
              })
            }
          />

          <p>Órgão emissor do RG</p>
          <input
            type="text"
            value={participante.orgaoEmissorDoRG}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                orgaoEmissorDoRG: e.target.value
              })
            }
          />

          <p>RG</p>
          <input
            type="text"
            value={participante.RG}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                RG: e.target.value
              })
            }
          />
          <p>Data de nascimento (DD/MM/AAAA)</p>
          <input
            type="text"
            value={participante.dataDeNascimento}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                dataDeNascimento: e.target.value
              })
            }
          />
          <p>RECEBIMENTO DA CARTA VOUCHER</p>
          <input
            type="text"
            value={participante.RecebimentoDaCartaVoucher}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                RecebimentoDaCartaVoucher: e.target.value
              })
            }
          />
          <p>OBSERVAÇÕES DE CONTATO</p>
          <input
            type="text"
            value={participante.observacoesdecontato}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                observacoesdecontato: e.target.value
              })
            }
          />
          <p>DATA DA INCLUSÃO DO (A) CONVIDADO (A)</p>
          <input
            type="text"
            value={participante.dataDaInclusaoDoConvidado}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                dataDaInclusaoDoConvidado: e.target.value
              })
            }
          />
          <p>ATENDIMENTO RSVP</p>
          <input
            type="text"
            value={participante.atendimentoRSVP}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                atendimentoRSVP: e.target.value
              })
            }
          />

          <p>DEMAIS OBSERVAÇÕES</p>
          <textarea
            type="text"
            value={participante.ultimoHistoricoDeRelacionamento}
            placeholder="-"
            onChange={e =>
              setParticipante({
                ...participante,
                ultimoHistoricoDeRelacionamento: e.target.value
              })
            }
            rows="5"
            cols="33"
          ></textarea>
        </form>
      </div>
    </Container>
  );
}
