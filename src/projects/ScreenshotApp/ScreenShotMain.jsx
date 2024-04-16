import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import "./screenshot.css";
import ErrorMessage from "../QuizApp/ErrorMessage";
import { CircularProgress } from "@mui/material";

const ScreenShotMain = () => {
  const [input, setInput] = useState("");
  const [screenshot, setScreenshot] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setInput("");

    setLoading(true);
    const response = await fetch(
      `https://api.apiflash.com/v1/urltoimage
?access_key=a75220648bfe44e2a7341bf0b462c77b&url=${input}`
    );
    if (response.ok) {
      setScreenshot(response);
      setLoading(false);
    }
  };

  return (
    <div className="ss_info">
      <Box mt={3} className="ss_box">
        <TextField
          variant="outlined"
          name="link"
          placeholder="enter the url here..."
          fullWidth
          width="100%"
          sx={{ mt: "20px", mb: "20px" }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {loading && <CircularProgress sx={{ mt: "10px", mb: "10px" }} />}
        {!loading && screenshot && (
          <a href={screenshot.url} target="_blank">
            <img src={screenshot.url} />
          </a>
        )}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
          fullWidth
          width="100%"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default ScreenShotMain;
