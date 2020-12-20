import React from 'react';

import GlobalStyle from './styles/GlobalStyle';

import { CardContainer, Container, SideBar } from './components/landing/style';
import Card from './components/card/index';

import Modal from 'react-modal'


import { MdAdd, MdClear } from 'react-icons/md'

function App() {

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
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
              
              <h2>Editando: </h2>
              <button onClick={closeModal}>  
              <MdClear
                  size={19}
                  fill={'black'}
                  style={{cursor: 'pointer'}}
              /> </button>
              <div></div>
              <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                          <button>the modal</button>
                      </form>
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
