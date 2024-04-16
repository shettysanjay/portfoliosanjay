import React, { useState } from "react";
import Header from "./Header";
import "../css/Note.css";
import Notes from "./Notes";
import CreateNote from "./CreateNote";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { v4 as uuid } from "uuid";
import DialogTitle from "@mui/material/DialogTitle";

function NotesMain() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [message, setMessage] = useState("");
  const handleTitle = (e) => {
    e.preventDefault();
    setNoteTitle(e.target.value);
  };
  const handleBody = (e) => {
    if (charLeft === 0) {
      setMessage("Limit extended");
    } else {
      setMessage("");
    }
    e.preventDefault();
    setNoteBody(e.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (prevState) => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        title: noteTitle,
        body: noteBody,
      },
    ]);
    setNoteBody("");
    setNoteTitle("");
    setOpen(false);
  };

  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  const charLimit = 100;
  const charLeft = charLimit - noteBody.length;
  return (
    <div className="notes_main">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Note</DialogTitle>
        <DialogContent>
          <CreateNote
            titleHandler={handleTitle}
            bodyHandler={handleBody}
            title={noteTitle}
            body={noteBody}
            charLeft={charLeft}
            message={message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="note_save">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="note_save"
            disabled={!charLeft}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <Header />
        <Button
          type="button"
          onClick={handleOpen}
          className="addNote_btn"
          variant="contained"
          style={{
            backgroundColor: "#07000a",
            fontSize: "20px",
            marginBottom: "10px",
            color: "white",
          }}
          sx={{
            ":hover": {
              bgcolor: "white",
              color: "#07000a",
            },
          }}
        >
          Add Note
        </Button>
        <Notes notes={notes} deleteHandler={handleDelete} />
      </div>
    </div>
  );
}

export default NotesMain;
