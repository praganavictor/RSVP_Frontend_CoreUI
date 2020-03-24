import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../services/api";

import { userselectors } from "../../../store/selectors/user";

import { Container, FormSubmit, Dates } from "./styles";

export default function Criar() {
  const [nome, setNome] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [dataInicioDia, setDataInicioDia] = useState("");
  const [dataInicioMes, setDataInicioMes] = useState("");
  const [dataInicioAno, setDataInicioAno] = useState("");
  const [dataTerminoDia, setDataTerminoDia] = useState("");
  const [dataTerminoMes, setDataTerminoMes] = useState("");
  const [dataTerminoAno, setDataTerminoAno] = useState("");
  const [descricao, setDescricao] = useState("");

  const user = useSelector(userselectors.getActiveUser);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      nome: nome.trim(),
      nomeCliente: nomeCliente.trim(),
      dataInicio: dataInicioDia + "/" + dataInicioMes + "/" + dataInicioAno,
      dataTermino: dataTerminoDia + "/" + dataTerminoMes + "/" + dataTerminoAno,
      descricao: descricao.trim()
    };

    if (
      !data.nome.length ||
      !data.nomeCliente.length ||
      !data.dataInicio.length ||
      !data.dataTermino.length ||
      !data.descricao.length
    )
      return;

    api
      .post("/eventos", data)
      .then(res => this.props.history.push("/eventos"))
      .catch(error => console.log(error));
  }

  return (
    <Container>
      <span>{user.nome}</span>

      <FormSubmit onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do evento"
          onChange={e => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome do cliente"
          onChange={e => setNomeCliente(e.target.value)}
          required
        />
        <Dates>
          <div>
            <label>Data do início</label>
            <section>
              <select defaultValue={"0"} onChange={e => setDataInicioDia(e.target.value)}>
                <option value="0" disabled>
                  Dia
                </option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select defaultValue={"0"} onChange={e => setDataInicioMes(e.target.value)}>
                <option value="0" disabled>
                  Mês
                </option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select defaultValue={"0"} onChange={e => setDataInicioAno(e.target.value)}>
                <option value="0" disabled>
                  Ano
                </option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </section>
          </div>
          <div>
            <label>Data do termino</label>
            <section>
              <select defaultValue={"0"} onChange={e => setDataTerminoDia(e.target.value)}>
                <option value="0" disabled>
                  Dia
                </option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select defaultValue={"0"} onChange={e => setDataTerminoMes(e.target.value)}>
                <option value="0" disabled>
                  Mês
                </option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select defaultValue={"0"} onChange={e => setDataTerminoAno(e.target.value)}>
                <option value="0" disabled>
                  Ano
                </option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </section>
          </div>
        </Dates>
        <textarea
          rows="5"
          placeholder="Descrição do evento"
          onChange={e => setDescricao(e.target.value)}
        />
        <p>Você tem 355 caracteres restantes.</p>
        <nav>
          <button type="submit">SALVAR</button>
          <button type="button">EXCLUIR</button>
        </nav>
      </FormSubmit>
    </Container>
  );
}
