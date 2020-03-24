import React from "react";
import { isAuthenticated, logout } from "./services/auth";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import entrar from "./pages/Login/Login";
import registrar from "./pages/Register/Register";

import eventos from "./pages/eventos";
import criarevento from "./pages/eventos/criar/";
import buscarevento from "./pages/eventos/busca/";
import editarevento from "./pages/eventos/editar/";

import buscaparticipante from "./pages/participante/busca/";
import resultadoparticipante from "./pages/participante/busca/resultado";
import criarparticipante from "./pages/participante/criar/";
import editarparticipante from "./pages/participante/editar/";

import erro404 from "./pages/error404";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={entrar} />

        <Route path="/registrar" component={registrar} />
        <Route
          path="/sair"
          component={() => {
            logout();
            return <Redirect to={{ pathname: "/" }} />;
          }}
        />

        <PrivateRoute exact path="/eventos" component={eventos} />
        <PrivateRoute path="/eventos/criar" component={criarevento} />
        <PrivateRoute exact path="/evento/:id" component={buscarevento} />
        <PrivateRoute
          exact
          path="/evento/:id/editar"
          component={editarevento}
        />

        <PrivateRoute
          exact
          path="/evento/:eventoId/buscaparticipante"
          component={buscaparticipante}
        />
        <PrivateRoute
          exact
          path="/evento/:eventoId/buscaparticipante/:id"
          component={resultadoparticipante}
        />
        <PrivateRoute
          exact
          path="/evento/:eventoId/criarparticipante"
          component={criarparticipante}
        />
        <PrivateRoute
          exact
          path="/evento/:eventoId/participante/:id/editar"
          component={editarparticipante}
        />

        <Route path="*" component={erro404} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routes;
