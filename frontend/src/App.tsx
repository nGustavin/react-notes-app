import React from 'react';

import GlobalStyle from './styles/GlobalStyle';


import { CardContainer, Container, SideBar } from './components/landing/style';
import Card from './components/card/index';



// JSX html => JS
// TSX html => TS

import ModalContent from './components/modalCreateNote/modalContent';

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="app">
        <Container>
          <SideBar>
            <ModalContent />    
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
