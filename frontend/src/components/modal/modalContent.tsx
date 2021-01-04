import React, { FormEvent, useState } from 'react';
import { MdAdd, MdClear } from 'react-icons/md';

import Modal from 'react-modal'
import api from '../../services/api';

// import { Container } from './styles';


export default function ModalContent() {

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    



    async function handleSubmit(event: FormEvent){

      event.preventDefault()

      const data = new FormData

      data.append('title', title)
      data.append('body', body)

      console.log({title, body})


      await api.post('/notes', data)
      alert('nota cadastrada!')
    }

    


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

    const [modalIsOpen,setIsOpen] = useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // subtitle.style.color = '#f00';
      }
    
      
        function closeModal(){
          setIsOpen(false);
        }
 

    return(
        <>
        <button type="submit" value="criar" onClick={openModal}>
              <MdAdd fill={"white"} size={32}/>
        </button>
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
                fill={'white'}
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
                }}>
                <h1
                  style={{
                    color: 'white',
                    fontWeight: 'normal',
                    fontFamily: 'Roboto, sans-serif'
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
                }}>
                <form
                  style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                  onSubmit={handleSubmit}
                >
                  <input 
                    id="input-title"
                    type='text'
                    placeholder='Titulo'
                    style={{ 
                      
                    }}
                    value={title}
                    onChange={e => setTitle(e.target.value)}  
                  />
                  
                 
                  <textarea
                    style={{
                      resize: 'none',
                      height: '100%',
                      width: '100%',
                      fontSize: '16pt',
                      fontFamily: 'Roboto, sans-serif'
                  }}
                  value={body}
                  onChange={e => setBody(e.target.value)}   
                />
                  <button type="submit">Enviar</button>
                </form>
                
              </div>

             </div>
         </Modal> 
         </>
    )
}