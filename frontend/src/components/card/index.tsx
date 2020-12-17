import React, { useEffect, useState } from 'react'
import { MdCreate, MdShare, MdClear } from 'react-icons/md'
import { updateExpressionStatement } from 'typescript'
import api from '../../services/api'
import { MainCard, Note, Toolbar } from './style'

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
        console.log(response.data)
      })
    }, [])

    function deleteNote(id: string) {
        const [ otherNote, setOtherNote ] = useState()

        setOtherNote(api.delete(`notes/${id}`))

        useEffect(() => {
            
        }, [])
    }

    return notes.map(note => {
        return (<MainCard key={note.id}>
            <Note>
                <h1>
                    { note?.title }
                </h1>

                <p>
                    { note?.body }
                </p>
            </Note>

            <Toolbar>
                <button type="submit">
                    <MdCreate size={19} fill={'white'}/>
                </button>

                <button type="submit">
                    <MdShare size={19} fill={'white'}/>
                </button>

                <button type="submit" onClick={() => { deleteNote(note?.id) }}>
                    <MdClear size={19} fill={'white'}/>
                </button>
            </Toolbar>
        </MainCard>)
    })
}

export default Card