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

  async function handleSubmit(){

    const data = new FormData()

    data.append('title', title)
    data.append('body', body)

    console.log({title, body})


    await api.post('/notes', {title, body})
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
              <h1>New Note</h1>
            </Title>
            <Body>
                <form onSubmit={handleSubmit}>
                  <input
                    name="title"
                    type='text'
                    placeholder='Ex: Wish List'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />

                  <textarea
                    name="title"
                    placeholder='smartphone, car, house...'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  />
                </form>
                <button type="submit" onClick={handleSubmit}>Create</button>
            </Body>
          </ContentContainer>
      </Modal> 
     </>
  )
}