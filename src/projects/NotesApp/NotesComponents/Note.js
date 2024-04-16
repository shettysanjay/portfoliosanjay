import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Note({ id, title, body, deleteNote }) {
  return (
    <div className="note">
      <div className="note_title">{title}</div>
      <div className="note_body">{body}</div>

      <div className="note_footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note_delete"
          aria-hidden="true"
          onClick={() => {
            deleteNote(id);
          }}
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
}

export default Note;
