import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Container, SideBar, CardContainer } from './components/landing/style';
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </CardContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
