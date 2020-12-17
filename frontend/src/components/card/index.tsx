import React, { useEffect, useState } from 'react'
import { MdCreate, MdShare, MdClear } from 'react-icons/md'
import api from '../../services/api'
import { MainCard, Note, Toolbar } from './style'

import CardPopup from '../cardpopup'

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

    return notes.map(note => {
        return (
        <MainCard key={note.id}>
            <Note>
                <h1>
                    { note?.title }
                </h1>

                <p>
                    { note?.body }
                </p>
            </Note>

            <Toolbar>
                <CardPopup/>

                <button type="submit">
                    <MdShare size={19} fill={'white'} onClick={() => { shareNote(note) }}/>
                </button>

                <button type="submit" onClick={() => { deleteNote(note?.id) }}>
                    <MdClear size={19} fill={'white'}/>
                </button>
            </Toolbar>
        </MainCard>)
    })
}

export default Card