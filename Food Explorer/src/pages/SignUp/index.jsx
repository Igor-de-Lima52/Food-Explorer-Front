import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleSignUp(){
    if(!name){
      return alert("Preencha o campo do seu nome");
    }
    if(!email){
      return alert("Preencha o campo do seu email");
    }
    if(password.length < 6){
      return alert("A senha precisa ter pelo menos 6 dígitos");
    }
    await api.post("/users", {name, email, password});
    alert("Conta criada com sucesso!");
  }
  return(
    <Container>
        <h1><img src={logo}/>food explorer</h1>
      <Form>
        <h2>Crie sua conta</h2>
        <div className="input-wrapper">
          <label htmlFor="name">Seu nome</label>
          <Input id="name" placeholder="Exemplo: Maria da Silva" type="text" onChange={e => setName(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input id="email" placeholder="Exemplo: exemplo@email.com.br" type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input id="password" placeholder="No mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <Button title="Criar conta" onClick={handleSignUp}></Button>
        <a href="/">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}