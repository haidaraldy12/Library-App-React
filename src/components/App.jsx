// import React, { useState } from 'react';
// import { getInitialData, showFormattedDate } from '../utils/index'; // Mengimpor data awal dan fungsi format tanggal
// import NoteInput from './NoteInput';
// import NoteList from './NoteList';

// function App() {
//   const [notes, setNotes] = useState(getInitialData());

//   const onAddNoteHandler = ({ title, body }) => {
//     setNotes((prevNotes) => [
//       ...prevNotes,
//       {
//         id: +new Date(),
//         title,
//         body,
//         createdAt: new Date().toISOString(),
//         archived: false,
//       },
//     ]);
//   };

//   const onDeleteHandler = (id) => {
//     setNotes(notes.filter(note => note.id !== id));
//   };

//   const onArchiveHandler = (id) => {
//     setNotes(notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note));
//   };

//   return (
//     <div className="note-app">
//       <div className="note-app__header">
//         <h1>Notes</h1>
//       </div>
//       <div className="note-app__body">
//         <NoteInput addNote={onAddNoteHandler} />
//         <h2>Catatan Aktif</h2>
//         <NoteList notes={notes.filter(note => !note.archived)} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
//         <h2>Arsip</h2>
//         <NoteList notes={notes.filter(note => note.archived)} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import { getInitialData } from '../utils/index'; // Mengimpor data awal
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  onAddNoteHandler = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  };

  onDeleteHandler = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  };

  onArchiveHandler = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes</h1>
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={notes.filter(note => !note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          <h2>Arsip</h2>
          <NoteList notes={notes.filter(note => note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        </div>
      </div>
    );
  }
}

export default App;

