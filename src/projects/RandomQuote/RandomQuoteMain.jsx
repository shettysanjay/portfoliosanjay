import React from "react";
import "./quote.css";
import { Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const RandomQuoteMain = () => {
  const [quote, setQuote] = useState("");
  const [counter, setCounter] = useState(0);
  const fetchQuote = async () => {
    await axios.get("https://api.adviceslip.com/advice").then((response) => {
      setQuote(response.data.slip.advice);
    });
  };
  useEffect(() => {
    fetchQuote();
  }, [counter]);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="quote_main">
      <div className="quote_header">
        <div className="quote">{quote}</div>
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
            onClick={handleClick}
          >
            Next quote
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default RandomQuoteMain;
