import React, { useState } from "react";
import { FaUniversity } from "react-icons/fa";

import { useAuth } from "components/contexts/auth";
import ForgotPassword from "../forgot_password";

import {
  Container,
  Form,
  Input,
  Label,
  Button,
  AuxIconLabel,
  AuxInput,
  ButtonLoading,
  LabelError,
} from "./styles";

const Login = () => {
  const { signIn, message, loading } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);

  function login() {
    signIn(email, password);
  }

  function handleSubmit(event) {
    event.preventDefault();
    login();
  }

  return (
    <Container>
      <ForgotPassword show={showModal} onHide={() => setShowModal(false)} />
      <Form onSubmit={handleSubmit}>
        <AuxIconLabel>
          <FaUniversity size={100} color="#1a2f3a" />
          <Label>Portal do Aluno</Label>
        </AuxIconLabel>
        <AuxInput>
          <Input
            type="email"
            placeholder="Email"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Senha"
            autoComplete="on"
            onChange={({ target }) => setPassword(target.value)}
          />
          {loading ? (
            <ButtonLoading>
              <div className="spinner" />
            </ButtonLoading>
          ) : (
            <>
              <Button>Entrar</Button>

              <LabelError>{message}</LabelError>
            </>
          )}
        </AuxInput>
        <div style={{ cursor: "pointer" }}>
          <p>
            Esqueceu sua senha?{" "}
            <strong onClick={() => setShowModal(true)}>
              Clique aqui para recuperar.
            </strong>{" "}
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
