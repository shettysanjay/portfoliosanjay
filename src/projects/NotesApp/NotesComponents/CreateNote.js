import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { TextField } from "@mui/material";

function CreateNote({
  titleHandler,
  bodyHandler,
  title,
  body,
  charLeft,
  message,
}) {
  return (
    <div className="create_note">
      <TextField
        type="text"
        variant="outlined"
        placeholder="Enter Title"
        className="createNote_title"
        onChange={titleHandler}
        value={title}
        sx={{ mb: "10px" }}
      />
      <TextField
        type="text"
        variant="outlined"
        placeholder="Type..."
        multiline
        maxRows={10}
        className="createNote_body"
        onChange={bodyHandler}
        value={body}
      />
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
        sx={{ mt: "10px" }}
      />
      <div className="createNote_message">{message}</div>
    </div>
  );
}

export default CreateNote;
