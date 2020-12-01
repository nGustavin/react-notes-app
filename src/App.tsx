import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { CardContainer, Container, SideBar } from './components/landing/style';
import Card from './components/card/index';

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

          <CardContainer>
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
          </CardContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
