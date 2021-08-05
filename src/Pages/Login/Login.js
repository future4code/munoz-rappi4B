import React from 'react';
//import axios from "axios"
//import { BASE_URL } from "../BaseUrl"

import { Button, TextField } from "@material-ui/core";
import { LoginContainer, LoginInputs, Logo, Title } from "./styled";
import LogoRappi from '../../img/logo-rappi4eats.svg';

export default function Login() {

  return (
    <>

      <LoginContainer>
        <Logo src={LogoRappi} class="Logo Raapi4" />
        <Title><h1>Entrar</h1></Title>
        <LoginInputs>
          <form >
            <TextField
              InputLabelProps={{ shrink: true }}
              variant='outlined'
              label='E-mail'
              placeholder='email@email.com'
              type='email'
              //onChange={}
              required={true}
            />
            <TextField
              //id='senha'
              label='Senha'
              variant='outlined'
              margin='normal'
              type='password'
              //value='123456'
              placeholder='mínimo 6 caracteres'
              //onChange={}
              required={true}
              labelWidth={70}
            />
            <Button variant="contained" color="primary" type={'submit'}>Entrar</Button>
          </form>
          <Button color="secundary">Não possui cadastro? Clique aqui.</Button>
        </LoginInputs>
      </LoginContainer>
    </>
  );
}
