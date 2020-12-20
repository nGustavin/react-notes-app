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
            </button>
          </SideBar>

          <CardContainer>
            
            <Card/>
          </CardContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
