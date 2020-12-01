import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Container, SideBar } from './components/landing/style';
import Card from './components/card/index';
import './components/card/estilos.css'

import { MdAdd } from 'react-icons/md'

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="app">
        <Container>
          <SideBar>
            <button type="submit" value="criar">
              <MdAdd size={ 50 }/>
            </button>
          </SideBar>

          <div id="CardContainer">
            <Card text/>
            <Card/>
            <Card text/>
            <Card/>
            <Card/>
            <Card text/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card text/>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
