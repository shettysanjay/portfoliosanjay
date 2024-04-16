import React from "react";
import "../css/Note.css";
import Note from "./Note";

function Notes({ notes, deleteHandler }) {
  return (
    <div className="notes_container">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            deleteNote={deleteHandler}
          />
        );
      })}
    </div>
  );
}

export default Notes;
