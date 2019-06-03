import React from 'react';

import { Container, Form } from './styles';

import logo from '../../assets/logo.png';

import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="Usuário / Repositório" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;