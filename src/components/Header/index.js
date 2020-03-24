import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import GoBack from "../goBackButton";
import { navigationselectors } from "../../store/selectors/navigation";
import { eventselectors } from "../../store/selectors/events";

import { MainHeader, GroupButton } from "./styles";

export default function Header() {
  const getgoback = useSelector(navigationselectors.getGoBack);
  const getsearch = useSelector(navigationselectors.getSearch);
  const getlogout = useSelector(navigationselectors.getLogout);
  const activeEvent = useSelector(eventselectors.ActiveEvent);

  return (
    <MainHeader>
      {/* {getgoback ? <GoBack /> : <label />} */}

      <span>SISTEMA RSVP</span>

      {/* <GroupButton>
        {getsearch && (
          <Link to={`/evento/${activeEvent._id}/buscaparticipante`}>
            <button type="button">Buscar</button>
          </Link>
        )}
        {getlogout && (
          <Link to={"/sair"}>
            <button type="button">Sair</button>
          </Link>
        )}
      </GroupButton> */}
    </MainHeader>
  );
}
