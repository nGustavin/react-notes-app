import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal'

import api from '../../services/api';

import { MdAdd, MdClear } from 'react-icons/md';
import { ContentContainer, Body, Title, modalStyles, CreateNote } from './modalStyle'

// import { Container } from './styles';

export default function ModalContent() {

  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')

// End of Form const's declaration

  async function handleSubmit(event: FormEvent){

    event.preventDefault()

    const data = new FormData()

    data.append('title', title)
    data.append('body', body)

    console.log({title, body})


    await api.post('/notes', data)
    alert('nota cadastrada!')
  }

// End of handle Submit function


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
 
// End of Modal Functions Chunk

// Modal Structure
return(
    <>
      <CreateNote type="submit" value="criar" onClick={openModal}>
            <MdAdd fill={"white"} size={32}/>
      </CreateNote>
      <Modal 
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Example Modal"
      >
          
          <ContentContainer>
            <MdClear
              fill={'white'}
              size={23}
              onClick={closeModal}
              style={{position: 'absolute', top: '2%', left: '95%'}}
            />
            <Title>
              <h1>Adicionar nota</h1>
            </Title>
            <Body>
                <form onSubmit={handleSubmit}>
                  <input type='text' placeholder='Ex: Wish List'/>
                  <textarea placeholder='smartphone, car, house...' />
                </form>
                <button type="submit">Create</button>
            </Body>
          </ContentContainer>
      </Modal> 
     </>
  )
}