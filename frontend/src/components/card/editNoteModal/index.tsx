import React, { useEffect, useState } from 'react';
import { MdClear, MdEdit } from 'react-icons/md';
import Modal from 'react-modal';
import api from '../../../services/api'
import { ContentContainer, Body, Title, customStyles  } from './styles'


interface Note {
    title: string,
    body: string,
    id: string,
}

interface Params {
  id: string;
}

export default function EditModal() {

    const [ notes, setNotes ] = useState<Note>()

    

    useEffect(() => {
      api.get(`notes`).then(response => {
        setNotes(response.data)
      })
    }, [])

    
    const [modalIsOpen,setIsOpen] = React.useState(false);
    

    function openModal() {
      setIsOpen(true);
      console.log(notes)
    }

    function afterOpenModal() {
        // subtitle.style.color = '#f00';
      }
    
    function closeModal(){
        setIsOpen(false);
      }

    return(
        <>
        <MdEdit 
            size={19}
            fill={'white'}
            onClick={openModal}
            cursor={'pointer'}
        />
        <Modal 
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
      >
          
          <ContentContainer>
            <MdClear
              fill={'white'}
              size={23}
              onClick={closeModal}
              style={{position: 'absolute', top: '2%', left: '95%', cursor: 'pointer'}}
            />
            <Title>
              <h1>New Note</h1>
            </Title>
            <Body>
                <form>
                  <input
                    name="title"
                    type='text'
                    placeholder='Ex: Wish List'
                    
                  />

                  <textarea
                    name="title"
                    placeholder='smartphone, car, house...'
                    
                  />
                </form>
                <button type="submit" >Create</button>
            </Body>
          </ContentContainer>
      </Modal> 
        </>
    )
}


// value={title}
// onChange={e => setTitle(e.target.value)}

// onClick={handleSubmit}

// value={body}
// onChange={e => setBody(e.target.value)}