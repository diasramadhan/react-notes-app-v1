import React from 'react';
import ReactDOM from 'react-dom/client';
import MyNoteApp from './MyNoteApp';
import DataContextProvider from './Context/DataContextProvider';
import ChangeContextProvider from './Context/ChangeContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <ChangeContextProvider>
      <MyNoteApp />
    </ChangeContextProvider>
  </DataContextProvider>
);
