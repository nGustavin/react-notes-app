import React, { useEffect, useState } from 'react'
import {  MdShare, MdClear, MdEdit } from 'react-icons/md'
import api from '../../services/api'
import { MainCard, Note, Toolbar } from './style'

import Modal from 'react-modal';


interface Note {
    title: string,
    body: string,
    id: string,
}

const Card: Function = (): JSX.Element[] => {



    const [ notes, setNotes ] = useState<Note[]>([])

    useEffect(() => {
      api.get('notes').then(response => {
        setNotes(response.data)
      })
    }, [])

    function deleteNote(id: string) {
        api.delete(`notes/${id}`)

        setNotes(notes.filter(note => note.id != id))
    }

    function shareNote(note: Note) {
        let shareText = `${note.title}\n\n${note.body}\n\n\nID da Nota: ${note.id}`

        navigator.clipboard.writeText(shareText)
    }

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
    
    return notes.map(note => { 
        return (
            <MainCard key={note.id}>
                <Note>
                    <h1>{ note?.title } </h1>
                    <p> { note?.body }  </p>
                </Note>

                <Toolbar>
                    <button type="button" id="editButton" onClick={openModal}>
                        <MdEdit 
                            size={19}
                            fill={'white'}
                        />
                    </button>

                    <Modal 
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        
                        <h2>Editando: {note?.title} </h2>
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
                    

                    <button type="submit">
                        <MdShare
                            size={19}
                            fill={'white'}
                            onClick={() => { shareNote(note) }}
                        />
                    </button>

                    <button type="submit" onClick={() => { deleteNote(note?.id) }}>
                        <MdClear
                            size={19}
                            fill={'white'}
                        />
                    </button>
                </Toolbar>
            </MainCard>
        )
    })
}

export default Card