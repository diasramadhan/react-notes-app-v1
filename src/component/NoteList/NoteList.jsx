import { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../Context/DataContextProvider';
import NavigationBar from '../NavigationBar/NavigationBar';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';

const NullContent = () => {
  return (
    <div className="list-note">
      <p>Tidak ada catatan</p>
    </div>
  );
};

const NoteContent = ({ content }) => {
  const { data, setData } = useContext(dataContext);
  const [datanote, setDatanote] = useState(data);

  const handleSearch = (e) => {
    const inputSearchNote = e.target.value.toLowerCase();
    const regexsearchNote = new RegExp(`${inputSearchNote}`);
    const cardNote = document.querySelectorAll('.card-note');
    cardNote.forEach((e) => {
      if (!regexsearchNote.test(e.childNodes[0].childNodes[0].textContent.toLowerCase())) {
        e.setAttribute('hidden', true);
      } else {
        e.removeAttribute('hidden');
      }
    });
  };

  const handleListNote = (archived) => {
    if (data.length < 1) {
      return <NullContent />;
    }

    return archived
      ? data.map((note) => {
          if (note.archived) {
            return (
              <NoteItem
                key={note.id}
                title={note.title}
                body={note.body}
                id={note.id}
                archived={note.archived}
                date={note.createdAt}
              />
            );
          }
        })
      : datanote.map((note) => {
          if (!note.archived) {
            return (
              <NoteItem
                key={note.id}
                title={note.title}
                body={note.body}
                id={note.id}
                archived={note.archived}
                date={note.createdAt}
              />
            );
          }
        });
  };

  useEffect(() => {
    setDatanote(data);
  }, [data, datanote]);

  return content === 'arsip' ? (
    <div className="container-notes">
      <input type="text" placeholder="Cari catatan" onChange={handleSearch} />
      <h2>Catatan Arsip</h2>
      <div className="list-note">{handleListNote(true)}</div>
    </div>
  ) : (
    <div className="container-notes">
      <input type="text" placeholder="Cari catatan" onChange={handleSearch} />
      <h2>Catatan Aktif</h2>
      <div className="list-note">{handleListNote(false)}</div>
    </div>
  );
};

function NotesList() {
  const [content, setContent] = useState('aktif');

  return (
    <section className="content-container">
      <NavigationBar content={content} setContent={setContent} />
      <NoteContent content={content} />
    </section>
  );
}
export default NotesList;
