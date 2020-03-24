import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import { login, isAuthenticated } from "../../services/auth";
import { userActions } from "../../store/actions/user";
import { navigationActions } from "../../store/actions/navigation";

import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toApp, setToApp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigationActions.setGoBack(false));
    dispatch(navigationActions.setLogout(false));
    dispatch(navigationActions.setSearch(false));
  }, [dispatch]);

  async function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/login", { email, password });
        dispatch(userActions.setActiveUser(response.data.usuario));
        login(response.data.usuario.token);
        setToApp(true);
      } catch (err) {
        setError(
          "Houve um problema com o login, verifique suas credenciais. T.T"
        );
      }
    }
  }

  return (
    <div className="app flex-row align-items-center">
      {toApp || isAuthenticated() ? <Redirect to="/eventos" /> : null}
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={handleSignIn}>
                    <h1>Login</h1>
                    <p className="text-muted">
                      {error ? error : "Faça o login para entrar no sistema"}
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">
                          Entrar
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button type="submit" color="link" className="px-0">
                          Esqueceu a senha?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
