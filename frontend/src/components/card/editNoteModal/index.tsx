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

export default function EditModal(props: any) {

    //const [ notes, setNotes ] = useState<Note>()

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    

    useEffect(() => {
      getAllNotes()
    }, [])

    async function getAllNotes(){
      api.get(`/notes/` + props.noteId)
        .then(res => {
          setTitle(res.data.title)
          setBody(res.data.body)

        })
    }

    async function handleEditNote(id: string){

      const data = new FormData()

      data.append('title', title)
      data.append('body', body)

      
      await api.put(`notes/${id}`, {title, body})
      
      closeModal()
      
      window.location.reload()

      window.alert('nota editada com sucesso')
    }

    
    const [modalIsOpen,setIsOpen] = React.useState(false);
    

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
        // subtitle.style.color = '#f00';
        console.log('Note id = ' + props.noteId)
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
              <h1>Edit Note</h1>
            </Title>
            <Body>
                <form>
                  <input
                    name="title"
                    type='text'
                    placeholder='Ex: Wish List'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />

                  <textarea
                    name="body"
                    placeholder='smartphone, car, house...'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  />
                </form>
                <button type="submit" onClick={() => handleEditNote(props.noteId)}>Edit</button>
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