import { useContext, useEffect, useState } from 'react';
import { changeContext } from '../../Context/ChangeContextProvider';
import NoteInput from '../NoteInput/NoteInput';
import NoteList from '../NoteList/NoteList';
import './NoteBody.css';

function NoteBody() {
  const { datachange } = useContext(changeContext);
  const [isChange, setIsChange] = useState(datachange);

  useEffect(() => {
    setIsChange(isChange);
  }, [isChange, datachange]);

  return (
    <section className="note-body">
      <NoteInput />
      <NoteList />
    </section>
  );
}

export default NoteBody;
