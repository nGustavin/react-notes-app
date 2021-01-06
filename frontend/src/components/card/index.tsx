import React, { useEffect, useState } from 'react'
import {  MdShare, MdClear } from 'react-icons/md'
import api from '../../services/api'
import { MainCard, CardInfo, Toolbar } from './style'
import EditModal from './editNoteModal/index'

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

        setNotes(notes.filter(note => note.id !== id))
    }

    function shareNote(note: Note) {
        let shareText = `${note.title}\n\n${note.body}\n\n\nID da Nota: ${note.id}`
        navigator.clipboard.writeText(shareText)
    }

    return notes.map(note => { 
        return (
            <MainCard key={note.id}>
                <CardInfo>
                    <h1> { note?.title } </h1>
                     <p> { note?.body }  </p>
                </CardInfo>

                <Toolbar>
                    <EditModal/>

                        <MdShare
                            size={19}
                            fill={'white'}
                            onClick={() => { shareNote(note) }}
                            style={{cursor: 'pointer'}}
                        />
                        <MdClear
                            onClick={() => { deleteNote(note?.id) }}
                            size={19}
                            fill={'white'}
                            style={{cursor: 'pointer'}}
                        />
                </Toolbar>
            </MainCard>
        )
    })
}

export default Card