import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./quiz.css";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import "./quiz.css";
import categories from "../../assets/categories";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import Quiz from "./Quiz";

function QuizMain() {
  const [cat, setCat] = useState("");
  const [diff, setDiff] = useState("");
  const [type, setType] = useState("");
  const [num, setNum] = useState(0);
  const [err, setErr] = useState(false);
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=20&category=${
        cat && `&category=${cat}`
      }${diff && `&difficulty=${diff}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cat || !diff || !type || !num) {
      setErr(true);
      return;
    } else {
      setErr(false);
      fetchQuestions();
    }
  };
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  const typeOptions = [
    { id: "mutiple", name: "Multiple choice" },
    { id: "boolean", name: "True/False" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h3" fontWeight="bold">
        Quiz App
      </Typography>
      {err && <ErrorMessage>Please fill in the details</ErrorMessage>}
      {questions ? (
        <Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      ) : (
        <>
          <TextField
            type="text"
            label="Enter name"
            variant="outlined"
            fullWidth
            width="100%"
            onChange={(e) => setName(e.target.value)}
            value={name}
            sx={{ mt: "30px" }}
          />
          <TextField
            select
            label="select category"
            variant="outlined"
            fullWidth
            width="100%"
            onChange={(e) => setCat(e.target.value)}
            value={cat}
            sx={{ mt: "30px" }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="select difficulty"
            variant="outlined"
            fullWidth
            width="100%"
            sx={{ mt: "30px" }}
            onChange={(e) => setDiff(e.target.value)}
            value={diff}
          >
            {difficultyOptions.map((doption) => (
              <MenuItem key={doption.id} value={doption.id}>
                {doption.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="select type"
            variant="outlined"
            fullWidth
            width="100%"
            sx={{ mt: "30px" }}
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            {typeOptions.map((toption) => (
              <MenuItem key={toption.id} value={toption.id}>
                {toption.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            type="number"
            label="Number of questions"
            onChange={(e) => setNum(e.target.value)}
            value={num}
            fullWidth
            size="small"
            sx={{ mt: "30px" }}
          />
          <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit">
              Start Quiz
            </Button>
          </Box>
        </>
      )}
    </form>
  );
}

export default QuizMain;
