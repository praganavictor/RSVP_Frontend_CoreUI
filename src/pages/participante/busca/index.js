import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo1 from "../../../assets/logo1.png";
import searchIcon from "../../../assets/SearchIcon.svg";

import { navigationActions } from "../../../store/actions/navigation";

import {
  LogoGrupoMM,
  Container,
  DivBusca,
  Title,
  FormBusca,
  InputText,
  ButtonBuscar
} from "./styles";

export default function Index(props) {
  const [busca, setBusca] = useState("");
  const { eventoId } = props.match.params;

  const dispatch = useDispatch();
  dispatch(navigationActions.setSearch(false));
  dispatch(navigationActions.setLogout(false));

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <LogoGrupoMM>
        <img src={logo1} alt="logo do grupomm" />
      </LogoGrupoMM>
      <DivBusca>
        <Title>Faça seu check-in para o evento!</Title>
        <FormBusca onSubmit={handleSubmit}>
          <InputText
            type="text"
            placeholder="Busque pelo seu nome, CPF ou ID..."
            onChange={e => setBusca(e.target.value)}
            required
          />
          <Link to={`/evento/${eventoId}/buscaparticipante/${busca}`}>
            <ButtonBuscar>
              <img src={searchIcon} alt="Search icon" />
              <span>BUSCAR</span>
            </ButtonBuscar>
          </Link>
        </FormBusca>
      </DivBusca>
    </Container>
  );
}
