import { useContext, useEffect, useState } from 'react';
import { changeContext } from '../../Context/ChangeContextProvider';
import { dataContext } from '../../Context/DataContextProvider';
import './NoteItem.css';
import { showFormattedDate } from '../../utils/data';

const CardButton = ({ archive, idTarget }) => {
  const { data, setData } = useContext(dataContext);
  const { datachange, setDatachange } = useContext(changeContext);

  const handleDelete = () => {
    const notes = data.filter((data) => data.id !== idTarget);
    setData(notes);
    setDatachange(!datachange);
  };

  const handleUpdate = () => {
    const targetIndex = data.findIndex((data) => data.id === idTarget);
    data[targetIndex].archived = !data[targetIndex].archived;
    setDatachange(!datachange);
  };

  useEffect(() => {
    setDatachange(!datachange);
  }, [handleDelete, handleUpdate, data, setDatachange]);

  return (
    <div className="card-btn">
      <button className="btn-delete" onClick={handleDelete}>
        Hapus
      </button>
      {archive ? (
        <button className="btn-arsip" onClick={handleUpdate}>
          Unarsip
        </button>
      ) : (
        <button className="btn-arsip" onClick={handleUpdate}>
          Arsip
        </button>
      )}
    </div>
  );
};

function NoteItem({ id, title, body, archived, date }) {
  return (
    <div className="card-note">
      <div className="card-title">
        <h4>{title}</h4>
        <h6>{showFormattedDate(date)}</h6>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>

      <CardButton archive={archived} idTarget={id} />
    </div>
  );
}

export default NoteItem;
