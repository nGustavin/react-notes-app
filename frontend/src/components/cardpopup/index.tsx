import React, { FormEvent, useState } from 'react';
import { MdCreate } from 'react-icons/md';
import Popup from 'reactjs-popup';
import api from '../../services/api';

import { Container } from './styles';

const CardPopup: React.FC = () => {
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
    <Popup trigger={<MdCreate size={19} fill={'white'}/>} position="right center">
      
      <form id='cardpopup' onSubmit={onSubmit}>
        <input type="text" 
          name="title" value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input type="text" 
          name="body" value={body} 
          onChange={e => setBody(e.target.value)}
        />
        <button type="submit" name="save">Salvar</button>
      </form>
    </Popup>
  );
};

export default CardPopup;
