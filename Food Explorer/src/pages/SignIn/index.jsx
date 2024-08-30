import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  return(
    <Container>
        <h1><img src={logo}/>food explorer</h1>
      <Form>
        <h2>Faça login</h2>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input id="email" placeholder="Exemplo: exemplo@email.com.br" type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input id="password" placeholder="No mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <Button title="Entrar" onClick={handleSignIn}></Button>
        <a href="/register">Criar conta</a>
      </Form>
    </Container>
  );
}