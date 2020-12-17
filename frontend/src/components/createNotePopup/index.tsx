import React, { FormEvent, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Popup from 'reactjs-popup';
import api from '../../services/api';

import { Container, StyledPopup } from './styles';

const CreateNotePopup: React.FC = () => {

  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')

  async function onSubmit(event: FormEvent) {
    // TODO:
    // - arrumar isso

    event.preventDefault()
    console.log({title, body})

    const data = new FormData()
    data.append('title', title)
    data.append('body', body)

    await api.post('notes', data)
    alert('Nota cadastrada B) ok')

  }
  return (
    <Container>
    <StyledPopup closeOnDocumentClick trigger={<MdAdd size={ 35 } fill={'white'}/>} position="right center">
        
        <form id='cardpopup' onSubmit={onSubmit}>
        <h1>Criar Nota</h1>
          <input type="text" 
            className="titleInput"
            name="title" value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input type="text" 
            className="bodyInput"
            name="body" value={body} 
            onChange={e => setBody(e.target.value)}
          />
          <button type="submit" name="save">Salvar</button>
        </form>
      </StyledPopup>
    </Container>
  );
};

export default CreateNotePopup;
