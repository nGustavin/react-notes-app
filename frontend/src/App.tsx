import React from 'react';

import GlobalStyle from './styles/GlobalStyle';

import { CardContainer, Container, SideBar } from './components/landing/style';
import Card from './components/card/index';

import Modal from 'react-modal'


// JSX html => JS
// TSX html => TS

import { MdAdd, MdClear } from 'react-icons/md'

function App() {

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content : {
      top: '50%',
      left: '50%',
      right : 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '700px',
      boxShadow: '0px 0px 0px 1980px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'space-between',
      backgroundColor:'rgb(17,5,78)',
      background: 'linear-gradient(333deg, rgba(17,5,78,1) 0%, rgba(50,25,142,1) 25%, rgba(91,51,224,1) 100%)',
      
    }
  };

  const [modalIsOpen,setIsOpen] = React.useState(false);
    

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  
    function closeModal(){
      setIsOpen(false);
    }

  return (
    <>
      <GlobalStyle/>
      <div className="app">
        <Container>
          <SideBar>

            <button type="submit" value="criar" onClick={openModal}>
              <MdAdd fill={"white"} size={32}/>
            </button>

{/* Modal Area */}
           <Modal 
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
           >
             <div 
             className="content-container"
             style={{
                 width: '100%',
                 height: '100%',
                 background: 'none',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'space-between',
                 alignItems: 'center',

              }}>
              
              <MdClear
                fill={'black'}
                size={23}
                onClick={closeModal}
                style={{position: 'absolute', top: '2%', left: '95%'}}
              />
              
              <div
                className="title"
                style={{
                  background: 'none',
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <h1
                  style={{
                    color: 'white',

                  }}>
                    Adicionar nota
                </h1>
                
              </div>

              <div
                className="body-container"
                style={{
                  background: 'none',
                  width: '100%',
                  height: '100%',
                }}  
              >
                <form>
                  <input type="text"/>
                  <input type="text"/>
                </form>
                <input type="button" value="enviar"/>
              </div>

             </div>
              
              
           </Modal>     

{/* Modal Area */}

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
