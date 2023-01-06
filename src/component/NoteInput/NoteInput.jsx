import { useContext, useEffect, useState } from 'react';
import { changeContext } from '../../Context/ChangeContextProvider';
import { dataContext } from '../../Context/DataContextProvider';
import './NoteInput.css';

function NoteInput() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { data, setData } = useContext(dataContext);
  const { datachange, setDatachange } = useContext(changeContext);

  const handleNote = (e) => {
    e.preventDefault();
    const getDate = new Date().toLocaleDateString();

    const newNote = {
      id: +new Date(),
      title: title,
      body: content,
      createdAt: getDate,
      archived: false,
    };

    data.push(newNote);
    setDatachange(!datachange);

    e.target.title.value = '';
    e.target.content.value = '';
  };

  return (
    <form onSubmit={handleNote}>
      <h2>Notes</h2>
      <p>Sisa karakter : {50 - title.length} </p>
      <input
        type="text"
        placeholder="Silakan masukan judul disini..."
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        required
        maxLength={50}
      />
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        placeholder="Tuliskan catatanmu disini..."
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button className="btn-save" type="submit">
        Save Note
      </button>
      <button className="btn-reset" type="reset">
        Reset
      </button>
    </form>
  );
}

export default NoteInput;
