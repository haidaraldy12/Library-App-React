import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  return (
    <div className="notes-list">
      {notes.map(note => (
        <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} />
      ))}
    </div>
  );
}

export default NoteList;
