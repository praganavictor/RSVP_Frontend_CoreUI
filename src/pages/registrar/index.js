import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { nome, email, senha } = this.state;
    if (!nome || !email || !senha) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/registrar", { nome, email, senha });
        this.props.history.push("/eventos");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ nome: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ senha: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
